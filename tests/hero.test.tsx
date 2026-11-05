import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("hero presents the approved English introduction with one dominant heading", async () => {
  const user = userEvent.setup();
  render(<Home />);
  expect(screen.getByText("Hey, I'm Geison.")).toBeVisible();
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Building, learning, rebuilding.");
  expect(screen.getByText("Based in Sydney, Australia.")).toBeVisible();
  await user.click(screen.getByRole("button", { name: "PT — Português brasileiro" }));
  expect(screen.getByText("Oi, sou o Geison.")).toBeVisible();
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Construindo, aprendendo, reconstruindo.");
  expect(screen.getByText("Em Sydney, Austrália.")).toBeVisible();
  expect(screen.queryByText("Hey, I'm Geison.")).not.toBeInTheDocument();
});
