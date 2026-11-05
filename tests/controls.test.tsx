import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";
import Home from "@/app/page";

test("header identifies the owner and defaults to English and dark", () => {
  render(<Home />);
  expect(screen.getByRole("banner")).toHaveTextContent("Geison Bruno");
  expect(screen.getByRole("button", { name: "EN — English" })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByRole("button", { name: "Switch to light theme" })).toBeEnabled();
  expect(document.documentElement).toHaveAttribute("lang", "en");
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
});

test("native controls switch language and theme using the keyboard", async () => {
  const user = userEvent.setup();
  render(<Home />);
  screen.getByRole("button", { name: "PT — Português brasileiro" }).focus();
  await user.keyboard("{Enter}");
  expect(document.documentElement).toHaveAttribute("lang", "pt-BR");
  const theme = screen.getByRole("button", { name: "Ativar tema claro" });
  theme.focus();
  await user.keyboard(" ");
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
  expect(screen.getByRole("button", { name: "Ativar tema escuro" })).toHaveFocus();
});

test("persists and restores explicit language and theme choices", async () => {
  const user = userEvent.setup();
  const firstVisit = render(<Home />);
  await user.click(screen.getByRole("button", { name: "PT — Português brasileiro" }));
  await user.click(screen.getByRole("button", { name: "Ativar tema claro" }));
  expect(localStorage.getItem("portfolio.locale")).toBe("pt-BR");
  expect(localStorage.getItem("portfolio.theme")).toBe("light");
  firstVisit.unmount();
  render(<Home />);
  expect(screen.getByRole("button", { name: "PT — Português brasileiro" })).toHaveAttribute("aria-pressed", "true");
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});

test("invalid saved preferences fall back to English and dark", () => {
  localStorage.setItem("portfolio.locale", "fr");
  localStorage.setItem("portfolio.theme", "system");
  render(<Home />);
  expect(document.documentElement).toHaveAttribute("lang", "en");
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
});

test("controls remain usable when browser storage is denied", async () => {
  vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("denied"); });
  vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("denied"); });
  const user = userEvent.setup();
  render(<Home />);
  await user.click(screen.getByRole("button", { name: "PT — Português brasileiro" }));
  await user.click(screen.getByRole("button", { name: "Ativar tema claro" }));
  expect(document.documentElement).toHaveAttribute("lang", "pt-BR");
  expect(document.documentElement).toHaveAttribute("data-theme", "light");
});
