import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("experience preserves the approved role and period in both languages", async () => {
  const user = userEvent.setup();
  render(<Home />);
  const section = screen.getByRole("region", { name: "EXPERIENCE" });
  expect(within(section).getByRole("heading", { name: "Flux Tecnologia" })).toBeVisible();
  expect(section).toHaveTextContent("Software Engineer");
  expect(section).toHaveTextContent("Oct 2023 — Nov 2025");
  expect(section).toHaveTextContent("Worked across backend, frontend and mobile applications, contributing to the development and maintenance of multiple products.");
  await user.click(screen.getByRole("button", { name: "Português brasileiro" }));
  const translated = screen.getByRole("region", { name: "EXPERIÊNCIA" });
  expect(translated).toHaveTextContent("Oct 2023 — Nov 2025");
  expect(translated).toHaveTextContent("Atuei em aplicações backend, frontend e mobile, contribuindo para o desenvolvimento e manutenção de diferentes produtos.");
});
