import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";

// Page-component tests omit Next's root layout. Mirror its server defaults.
beforeEach(() => {
  if (typeof document === "undefined") return;
  document.documentElement.lang = "en";
  document.documentElement.dataset.theme = "dark";
});

afterEach(() => {
  if (typeof document === "undefined") return;
  cleanup();
  localStorage.clear();
});
