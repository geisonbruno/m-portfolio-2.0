export const localeKey = "portfolio.locale";
export const themeKey = "portfolio.theme";
export type Theme = "dark" | "light";

// This trusted, constant script runs before paint. Never interpolate user input.
export const themeScript = `try { var t = localStorage.getItem("${themeKey}"); document.documentElement.dataset.theme = t === "light" ? "light" : "dark"; } catch {}`;
