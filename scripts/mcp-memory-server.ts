#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
    CallToolRequestSchema,
    ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import { randomUUID } from "crypto";

// Configuration
const MEMORY_FILE = path.resolve(process.cwd(), ".build-memory.json");

interface MemoryEntry {
    id: string;
    timestamp: string;
    type: "removal" | "addition" | "refactor" | "decision" | "bugfix";
    subject: string; // e.g., "HeaderComponent", "auth-logic"
    reason: string;  // Why was this done?
    context: string; // Additional details, previous state, etc.
}

// Helper to ensure memory file exists and read it
async function getMemory(): Promise<MemoryEntry[]> {
    try {
        const data = await fs.readFile(MEMORY_FILE, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        // If file doesn't exist, return empty array
        return [];
    }
}

// Helper to save memory
async function saveMemory(memory: MemoryEntry[]) {
    await fs.writeFile(MEMORY_FILE, JSON.stringify(memory, null, 2), "utf-8");
}

// Helper to get current project dependencies
async function getPackageDependencies(): Promise<string[]> {
    try {
        const packageJsonPath = path.resolve(process.cwd(), "package.json");
        const data = await fs.readFile(packageJsonPath, "utf-8");
        const pkg = JSON.parse(data);
        return [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.devDependencies || {}),
        ];
    } catch (e) {
        return [];
    }
}

// Create the MCP Server
const server = new Server(
    {
        name: "bearcave-build-memory",
        version: "1.0.0",
    },
    {
        capabilities: {
            tools: {},
        },
    }
);

// Define Tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
        tools: [
            {
                name: "log_build_decision",
                description: "Log a significant build decision, removal, or architectural change to project memory.",
                inputSchema: zodToJsonSchema(
                    z.object({
                        type: z.enum(["removal", "addition", "refactor", "decision", "bugfix"]),
                        subject: z.string().describe("The component, file, or feature being changed"),
                        reason: z.string().describe("The 'why' behind the change. Crucial for future context."),
                        context: z.string().optional().describe("Extra details, what it replaced, or specific constraints."),
                    })
                ),
            },
            {
                name: "query_build_memory",
                description: "Search the project build memory to understand past decisions or why things were removed.",
                inputSchema: zodToJsonSchema(
                    z.object({
                        query: z.string().describe("Keywords to search for (e.g., 'header', 'auth', 'removed')"),
                        limit: z.number().optional().default(5),
                    })
                ),
            },
            {
                name: "check_regressions",
                description: "Analyze the current project dependencies against past 'removal' decisions to ensure we aren't re-introducing banned libraries.",
                inputSchema: zodToJsonSchema(
                    z.object({
                        ignore: z.array(z.string()).optional().describe("List of subjects to ignore for this check if necessary."),
                    })
                ),
            },
        ],
    };
});

// Handle Tool Calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;

    if (name === "log_build_decision") {
        const { type, subject, reason, context } = args as any;
        const memory = await getMemory();

        const newEntry: MemoryEntry = {
            id: randomUUID(),
            timestamp: new Date().toISOString(),
            type,
            subject,
            reason,
            context: context || "",
        };

        memory.push(newEntry);
        await saveMemory(memory);

        return {
            content: [
                {
                    type: "text",
                    text: `Successfully logged ${type} for ${subject}.`,
                },
            ],
        };
    }

    if (name === "query_build_memory") {
        const { query, limit } = args as any;
        const memory = await getMemory();

        // Simple keyword matching (can be upgraded to semantic search later)
        const results = memory
            .filter((entry) =>
                entry.subject.toLowerCase().includes(query.toLowerCase()) ||
                entry.reason.toLowerCase().includes(query.toLowerCase()) ||
                entry.context.toLowerCase().includes(query.toLowerCase())
            )
            .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()) // Newest first
            .slice(0, limit);

        if (results.length === 0) {
            return {
                content: [{ type: "text", text: "No matching build memory found." }],
            };
        }

        const formatted = results.map(r =>
            `[${r.timestamp}] ${r.type.toUpperCase()}: ${r.subject}\nReason: ${r.reason}\nContext: ${r.context}`
        ).join("\n---\n");

        return {
            content: [{ type: "text", text: formatted }],
        };
    }

    if (name === "check_regressions") {
        const memory = await getMemory();
        const currentDeps = await getPackageDependencies();

        // Find things we removed
        const removals = memory.filter(m => m.type === "removal");
        const violations: string[] = [];

        for (const removal of removals) {
            // Check if the removed subject (e.g., "moment") is currently in dependencies
            // We do a loose check: is the subject name inside the dependency list?
            if (currentDeps.includes(removal.subject)) {
                violations.push(`⚠️ VIOLATION: '${removal.subject}' was found in package.json but was removed on ${removal.timestamp}.\n   Reason for removal: ${removal.reason}`);
            }
        }

        if (violations.length === 0) {
            return {
                content: [{ type: "text", text: "✅ No architectural regressions found. All removed dependencies remain removed." }],
            };
        }

        return {
            content: [{ type: "text", text: violations.join("\n\n") }],
        };
    }

    throw new Error(`Unknown tool: ${name}`);
});

// Start Server
async function run() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Build Memory MCP Server running on stdio");
}

run().catch((error) => {
    console.error("Fatal error running server:", error);
    process.exit(1);
});

// Helper for Zod schema conversion (simplified for this snippet)
function zodToJsonSchema(schema: any): any {
    // In a real app, use 'zod-to-json-schema' package, 
    // but for simplicity we rely on the SDK's expected structure or a basic conversion.
    // For this specific example, we'll assume the AI client handles the schema structure 
    // or you install `zod-to-json-schema` and use `zodToJsonSchema(schema)`.
    // Here is a manual mapping for the specific schemas above:
    if (schema.shape.type) {
        return {
            type: "object",
            properties: {
                type: { type: "string", enum: ["removal", "addition", "refactor", "decision", "bugfix"] },
                subject: { type: "string" },
                reason: { type: "string" },
                context: { type: "string" }
            },
            required: ["type", "subject", "reason"]
        }
    }
    return {
        type: "object",
        properties: {
            query: { type: "string" },
            limit: { type: "number" }
        },
        required: ["query"]
    }
}