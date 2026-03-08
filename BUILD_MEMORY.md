# 🧠 Build Memory System

This repository utilizes a **Build Memory** system to persist architectural decisions, track removed dependencies, and prevent regressions. This system allows both human developers and AI assistants to maintain context across different sessions and build phases.

## 📂 Core Components

1.  **`.build-memory.json`** (Project Root)
    *   The database of all logged decisions.
    *   **Format**: JSON array of `MemoryEntry` objects.
    *   **Do not edit manually** unless fixing JSON corruption.

2.  **`scripts/mcp-memory-server.ts`** (MCP Server)
    *   An implementation of the Model Context Protocol.
    *   Allows AI assistants to `log` and `query` the build memory.

3.  **`scripts/check-decisions.ts`** (Guardrail)
    *   A script that validates the current `package.json` against past "removal" decisions.
    *   Prevents re-introduction of banned libraries.

---

## 🤖 Instructions for AI Assistants

If you are an AI assistant working on this codebase, you **must** check the build memory before making significant changes (adding dependencies, refactoring core components, or deleting features).

### Available Tools

#### 1. `query_build_memory`
*   **Description**: Search past decisions.
*   **Usage**:
    *   *Before* answering "Why is X implemented this way?"
    *   *Before* suggesting a new library (check if it was previously removed).
    *   *When* a user asks about a missing feature.
*   **Example**: `query_build_memory({ query: "moment.js" })`

#### 2. `log_build_decision`
*   **Description**: Record a new decision.
*   **Usage**: Call this whenever you:
    *   Remove a dependency.
    *   Delete a component or feature.
    *   Make a major architectural pivot (e.g., "Switching from Redux to Zustand").
*   **Inputs**:
    *   `type`: `"removal" | "addition" | "refactor" | "decision" | "bugfix"`
    *   `subject`: The specific library or component (e.g., `"lodash"`, `"HeroSection"`).
    *   `reason`: A concise explanation of *why*.
    *   `context`: (Optional) Extra details.

#### 3. `check_regressions`
*   **Description**: Scans `package.json` for forbidden dependencies.
*   **Usage**: Call this if you suspect a dependency might have been banned, or before finalizing a task that involved adding packages.

---

## 👨‍💻 Instructions for Developers

### Running the Guardrail
To ensure you haven't accidentally re-added a banned library, run:

```bash
npx tsx scripts/check-decisions.ts
```

### Running the MCP Server manually
If you need to attach a local AI client to the memory server:

```bash
npx tsx scripts/mcp-memory-server.ts
```