// @vitest-environment node
import { ESLint } from "eslint";
import { expect, test } from "vitest";

const eslint = new ESLint();

test.each([
  ["src/probe.js", "missingName = 1;", "no-undef"],
  ["src/probe.ts", "const unused: number = 1;", "@typescript-eslint/no-unused-vars"],
  ["src/probe.tsx", 'import { useState } from "react"; export function Probe({ active }: { active: boolean }) { if (active) useState(0); return <div />; }', "react-hooks/rules-of-hooks"],
])("lint configuration still rejects %s violations after dependency updates", async (filePath, code, ruleId) => {
  const [result] = await eslint.lintText(code, { filePath });
  expect(result.messages.map((message) => message.ruleId)).toContain(ruleId);
});

test("valid TSX remains lintable and generated files remain ignored", async () => {
  const [result] = await eslint.lintText("export function Probe() { return <main />; }", { filePath: "src/probe.tsx" });
  expect(result.messages).toEqual([]);
  expect(await eslint.isPathIgnored(".next/types/probe.ts")).toBe(true);
});
