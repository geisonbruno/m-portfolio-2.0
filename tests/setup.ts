import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeEach } from "vitest";

// Page-component tests omit Next's root layout. Mirror its server defaults.
beforeEach(() => {
  document.documentElement.lang = "en";
  document.documentElement.dataset.theme = "dark";
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});
