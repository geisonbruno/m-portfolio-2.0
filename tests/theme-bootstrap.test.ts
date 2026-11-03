import { runInNewContext } from "node:vm";
import { expect, test } from "vitest";
import { themeScript } from "@/lib/preferences";

test.each([null, "dark", "light", "system", '<script>alert(1)</script>'])("pre-paint script safely restores %s", (saved) => {
  const document = { documentElement: { dataset: { theme: "dark" } } };
  runInNewContext(themeScript, { document, localStorage: { getItem: () => saved } });
  expect(document.documentElement.dataset.theme).toBe(saved === "light" ? "light" : "dark");
});

test("pre-paint script tolerates denied storage", () => {
  const document = { documentElement: { dataset: { theme: "dark" } } };
  expect(() => runInNewContext(themeScript, { document, localStorage: { getItem: () => { throw new Error("denied"); } } })).not.toThrow();
  expect(document.documentElement.dataset.theme).toBe("dark");
});
