import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vitest";
import RootLayout from "@/app/layout";
import { themeScript } from "@/lib/preferences";

test("root layout supplies English/dark defaults and the pre-paint theme script", () => {
  const html = renderToStaticMarkup(<RootLayout><main /></RootLayout>);
  const document = new DOMParser().parseFromString(html, "text/html");
  expect(document.documentElement.lang).toBe("en");
  expect(document.documentElement.dataset.theme).toBe("dark");
  expect(document.head.querySelector("script")?.textContent).toBe(themeScript);
});
