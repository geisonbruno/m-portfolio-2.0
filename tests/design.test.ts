import { readFileSync } from "node:fs";
import { expect, test } from "vitest";

const css = readFileSync("src/app/globals.css", "utf8");
const luminance = (hex: string) => {
  const [r, g, b] = hex.match(/.{2}/g)!.map((part) => {
    const channel = parseInt(part, 16) / 255;
    return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

test.each([":root", '[data-theme="light"]'])("%s tokens have accessible primary and secondary text contrast", (selector) => {
  const declarations = css.slice(css.indexOf(selector)).split("}")[0];
  const color = (name: string) => {
    const match = declarations.match(new RegExp(`--${name}: #([0-9a-f]{6})`));
    expect(match, `${selector}: ${name} token exists`).not.toBeNull();
    return luminance(match![1]);
  };
  const background = color("background");
  for (const name of ["foreground", "muted"]) {
    const text = color(name);
    expect((Math.max(background, text) + 0.05) / (Math.min(background, text) + 0.05)).toBeGreaterThanOrEqual(4.5);
  }
});
