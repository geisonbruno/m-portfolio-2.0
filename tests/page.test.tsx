import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "@/app/page";

test("exposes one main landmark for the single-page portfolio", () => {
  render(<Home />);
  expect(screen.getAllByRole("main")).toHaveLength(1);
});
