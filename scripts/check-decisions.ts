import fs from "fs/promises";
import path from "path";

// Configuration
const MEMORY_FILE = path.resolve(process.cwd(), ".build-memory.json");
const PACKAGE_FILE = path.resolve(process.cwd(), "package.json");

interface MemoryEntry {
    type: string;
    subject: string;
    reason: string;
    timestamp: string;
}

async function checkDecisions() {
    console.log("🛡️  Running Architectural Guardrail...");

    // 1. Load Memory
    let memory: MemoryEntry[] = [];
    try {
        const data = await fs.readFile(MEMORY_FILE, "utf-8");
        memory = JSON.parse(data);
    } catch (e) {
        console.log("ℹ️  No build memory found. Skipping checks.");
        return;
    }

    // 2. Load Dependencies
    let dependencies: string[] = [];
    try {
        const pkgData = await fs.readFile(PACKAGE_FILE, "utf-8");
        const pkg = JSON.parse(pkgData);
        dependencies = [
            ...Object.keys(pkg.dependencies || {}),
            ...Object.keys(pkg.devDependencies || {}),
        ];
    } catch (e) {
        console.error("❌ Could not read package.json");
        process.exit(1);
    }

    // 3. Check for Regressions
    const removals = memory.filter((m) => m.type === "removal");
    let hasError = false;

    removals.forEach((removal) => {
        if (dependencies.includes(removal.subject)) {
            console.error(`\n🚨 CRITICAL: '${removal.subject}' is present in dependencies, but was marked as REMOVED.`);
            console.error(`   📅 Date: ${removal.timestamp}`);
            console.error(`   📝 Reason: ${removal.reason}`);
            hasError = true;
        }
    });

    if (hasError) {
        console.error("\n❌ Build validation failed. Please remove the banned dependencies or update .build-memory.json if this is intentional.");
        process.exit(1);
    } else {
        console.log("✅ Architectural integrity verified.");
    }
}

checkDecisions();