import { mkdir } from "node:fs/promises";
import AxeBuilder from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  return errors;
}

for (const width of [320, 390, 768, 1440, 1920]) {
  for (const locale of ["en", "pt-BR"] as const) {
    for (const theme of ["dark", "light"] as const) {
      test(`${width}px ${locale} ${theme}: responsive, accessible, approved content`, async ({ page }) => {
        const errors = collectErrors(page);
        await page.setViewportSize({ width, height: 900 });
        const response = await page.goto("/");
        expect(response?.status()).toBe(200);
        await expect(page.getByRole("button", { name: "EN — English" })).toHaveAttribute("aria-pressed", "true");
        await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
        if (locale === "pt-BR") await page.getByRole("button", { name: "PT — Português brasileiro" }).click();
        if (theme === "light") await page.getByRole("button", { name: /Switch to light theme|Ativar tema claro/ }).click();
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
        await expect(page.getByRole("heading", { level: 1 })).toHaveText(locale === "en" ? "Building, learning, rebuilding." : "Construindo, aprendendo, reconstruindo.");
        await expect(page.getByRole("article")).toHaveCount(2);
        await expect(page.getByRole("heading", { name: "ReturnFlow", exact: true })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Oz Radar", exact: true })).toBeVisible();
        await expect(page.getByRole("heading", { name: "Flux Tecnologia", exact: true })).toBeVisible();
        await expect(page.getByRole("main")).toHaveCount(1);
        await expect(page.getByRole("banner")).toHaveCount(1);
        await expect(page.getByRole("contentinfo")).toHaveCount(1);
        await expect(page.getByRole("heading", { level: 2 })).toHaveCount(3);
        await expect(page.locator("body")).not.toContainText(/\[ADD|\[CURRENT YEAR\]|Personal Utilities/);
        await expect(page.locator('a:not([href="#content"])')).toHaveCount(0);
        const layout = await page.evaluate(() => ({
          width: document.documentElement.clientWidth,
          scrollWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth),
          headingSize: parseFloat(getComputedStyle(document.querySelector("h1")!).fontSize),
          copySize: parseFloat(getComputedStyle(document.querySelector(".copy")!).fontSize),
          buttons: [...document.querySelectorAll("button")].map((button) => ({ width: button.getBoundingClientRect().width, height: button.getBoundingClientRect().height })),
        }));
        expect(layout.scrollWidth).toBeLessThanOrEqual(layout.width);
        expect(layout.headingSize).toBeGreaterThanOrEqual(32);
        expect(layout.copySize).toBeGreaterThanOrEqual(16);
        for (const button of layout.buttons) {
          expect(button.width).toBeGreaterThanOrEqual(44);
          expect(button.height).toBeGreaterThanOrEqual(44);
        }
        const accessibility = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
        expect(accessibility.violations).toEqual([]);
        await mkdir(".qa/screenshots", { recursive: true });
        await page.screenshot({ path: `.qa/screenshots/${width}-${locale}-${theme}.png`, fullPage: true });
        expect(errors).toEqual([]);
      });
    }
  }
}

test("skip link is visible on keyboard focus and reaches main", async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Skip to content" });
  await expect(skip).toBeFocused();
  expect(await skip.evaluate((element) => getComputedStyle(element).outlineStyle)).toBe("solid");
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  expect(errors).toEqual([]);
});

test("keyboard controls have visible focus and persist choices", async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto("/");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "EN — English" })).toBeFocused();
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("button", { name: "Ativar tema claro" })).toBeFocused();
  expect(await page.getByRole("button", { name: "Ativar tema claro" }).evaluate((element) => getComputedStyle(element).outlineWidth)).toBe("2px");
  await page.keyboard.press("Space");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.reload();
  await expect(page.getByRole("button", { name: "PT — Português brasileiro" })).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Construindo");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await page.getByRole("button", { name: "EN — English" }).click();
  await page.getByRole("button", { name: "Switch to dark theme" }).click();
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  expect(errors).toEqual([]);
});

test("stored light theme applies before client JavaScript hydrates", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("portfolio.theme", "light"));
  await page.route("**/_next/static/**", (route) => route.request().resourceType() === "script" ? route.abort() : route.continue());
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Building");
  expect(await page.evaluate(() => getComputedStyle(document.documentElement).colorScheme)).toBe("light");
});

test("invalid preferences fall back to English and dark", async ({ page }) => {
  const errors = collectErrors(page);
  await page.addInitScript(() => {
    localStorage.setItem("portfolio.theme", "system");
    localStorage.setItem("portfolio.locale", "fr");
  });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  expect(errors).toEqual([]);
});

test("denied storage does not break the page or controls", async ({ page }) => {
  const errors = collectErrors(page);
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => { throw new Error("storage denied"); };
    Storage.prototype.setItem = () => { throw new Error("storage denied"); };
  });
  await page.goto("/");
  await page.getByRole("button", { name: "PT — Português brasileiro" }).click();
  await page.getByRole("button", { name: "Ativar tema claro" }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  expect(errors).toEqual([]);
});

for (const width of [320, 390]) {
  test(`${width}px reduced motion and enlarged text retain a usable layout`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/");
    await page.getByRole("button", { name: "PT — Português brasileiro" }).click();
    await page.evaluate(() => { document.documentElement.style.fontSize = "200%"; });
    const measured = await page.evaluate(() => ({
      width: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
      transition: getComputedStyle(document.querySelector("button")!).transitionDuration,
      animation: getComputedStyle(document.querySelector("h1")!).animationName,
    }));
    expect(measured.scrollWidth).toBeLessThanOrEqual(measured.width);
    expect(measured.transition).toBe("0s");
    expect(measured.animation).toBe("none");
  });
}
