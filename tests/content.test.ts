import { expect, test } from "vitest";
import { readFileSync } from "node:fs";
import { externalLinks, portfolio, projects } from "@/content/portfolio";

test("contains exactly the two approved projects in editorial order", () => {
  expect(projects.map(({ number, name, year }) => ({ number, name, year }))).toEqual([
    { number: "01", name: "ReturnFlow", year: "2026" },
    { number: "02", name: "Oz Radar", year: "2026" },
  ]);
});

test("keeps the approved technology lists and unresolved URLs honest", () => {
  expect(projects[0].technologies).toEqual(["Java", "Spring Boot", "React", "React Native", "PostgreSQL"]);
  expect(projects[1].technologies).toEqual(["Java 21", "Spring Boot", "PostgreSQL"]);
  expect(Object.values(externalLinks)).toEqual([null, null, null, null, null]);
  expect(projects.every((project) => project.githubUrl === null)).toBe(true);
});

test("runtime editorial copy is sourced from CONTENT.md without placeholders", () => {
  const normalize = (text: string) => text.replace(/\s+/g, " ").trim();
  const approved = normalize(readFileSync("docs/CONTENT.md", "utf8"));
  const values = (value: unknown): string[] => {
    if (typeof value === "string") return [value];
    if (value && typeof value === "object") return Object.values(value).flatMap(values);
    return [];
  };
  for (const text of values([portfolio, projects])) {
    expect(approved).toContain(normalize(text));
    expect(text).not.toMatch(/\[ADD|\[CURRENT YEAR\]/);
  }
});
