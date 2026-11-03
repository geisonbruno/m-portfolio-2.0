import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Home from "@/app/page";
import { ProjectRow } from "@/components/Projects";
import { projects } from "@/content/portfolio";

test("renders only ReturnFlow and Oz Radar with approved metadata and no fake links", async () => {
  const user = userEvent.setup();
  render(<Home />);
  const section = screen.getByRole("region", { name: "SELECTED PROJECTS" });
  const entries = within(section).getAllByRole("article");
  expect(entries).toHaveLength(2);
  expect(within(entries[0]).getByRole("heading", { name: "ReturnFlow" })).toBeVisible();
  expect(entries[0]).toHaveTextContent("01");
  expect(entries[0]).toHaveTextContent("2026");
  expect(entries[0]).toHaveTextContent("Return management platform for drivers and warehouse operations.");
  expect(entries[0]).toHaveTextContent("React Native");
  expect(entries[1]).toHaveTextContent("Oz Radar");
  expect(entries[1]).toHaveTextContent("Java 21");
  expect(within(section).queryByRole("link")).not.toBeInTheDocument();
  expect(section).not.toHaveTextContent(/Personal Utilities|\[ADD/);
  await user.click(screen.getByRole("button", { name: "Português brasileiro" }));
  expect(screen.getByRole("region", { name: "PROJETOS SELECIONADOS" })).toHaveTextContent("Plataforma para monitoramento e classificação de ofertas da Amazon.");
});

test("a supplied GitHub repository opens directly in a safe new tab", () => {
  const githubUrl = "https://github.com/example/returnflow"; // Test fixture, never runtime content.
  render(<ProjectRow locale="en" project={{ ...projects[0], githubUrl }} />);
  const link = screen.getByRole("link", { name: /ReturnFlow.*GitHub.*opens in a new tab/ });
  expect(link).toHaveAttribute("href", githubUrl);
  expect(link).toHaveAttribute("target", "_blank");
  expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

test.each([null, "", "[ADD RETURNFLOW GITHUB URL]", "javascript:alert(1)", "http://github.com/example/repo", "https://github.com.evil.example/a/b", "https://user:pass@github.com/a/b", "https://github.com/example", "https://github.com/a/b/issues", " https://github.com/a/b", "https:github.com/a/b"])("unresolved or invalid repository destination %s is not navigable", (githubUrl) => {
  render(<ProjectRow locale="pt-BR" project={{ ...projects[0], githubUrl }} />);
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
  expect(screen.getByRole("article")).toHaveTextContent("link indisponível");
  expect(screen.getByRole("article")).not.toHaveTextContent(/\[ADD/);
});
