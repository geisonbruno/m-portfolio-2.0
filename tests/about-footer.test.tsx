import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";
import Home from "@/app/page";
import { Footer } from "@/components/Footer";

test("about and footer use approved content, current year and safe unresolved social labels", async () => {
  const user = userEvent.setup();
  render(<Home />);
  const about = screen.getByRole("region", { name: "ABOUT" });
  expect(about).toHaveTextContent("I'm a Software Engineer focused on backend development, with experience across web, mobile and infrastructure.");
  expect(about).toHaveTextContent("I enjoy building practical things, learning along the way and keeping solutions simple.");
  const footer = screen.getByRole("contentinfo");
  expect(footer).toHaveTextContent(`© ${new Date().getFullYear()} Geison Bruno`);
  for (const label of ["GitHub", "LinkedIn", "Email"]) expect(within(footer).getByText(label)).toBeVisible();
  expect(within(footer).queryByRole("link")).not.toBeInTheDocument();
  expect(footer).not.toHaveTextContent(/\[ADD|\[CURRENT YEAR\]/);
  await user.click(screen.getByRole("button", { name: "Português brasileiro" }));
  const translated = screen.getByRole("region", { name: "SOBRE" });
  expect(translated).toHaveTextContent("Sou Software Engineer com foco em backend, com experiência também em web, mobile e infraestrutura.");
  expect(translated).toHaveTextContent("Gosto de construir coisas úteis, aprender durante o processo e manter as soluções simples.");
});

test("resolved social profiles use safe new tabs and email uses mailto", () => {
  const links = { github: "https://github.com/example", linkedin: "https://www.linkedin.com/in/example", email: "hello+portfolio@example.com" };
  render(<Footer locale="en" year={2030} links={links} />);
  for (const [name, href] of [["GitHub", links.github], ["LinkedIn", links.linkedin]]) {
    const link = screen.getByRole("link", { name: new RegExp(`${name}.*opens in a new tab`) });
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  }
  expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute("href", `mailto:${links.email}`);
  expect(screen.getByRole("contentinfo")).toHaveTextContent("© 2030 Geison Bruno");
});

test.each([
  { github: "[ADD GITHUB PROFILE URL]", linkedin: "javascript:alert(1)", email: "[ADD EMAIL ADDRESS]" },
  { github: "https:github.com/example", linkedin: "https://user:pass@example.com", email: "hello@example.com?bcc=other@example.com" },
  { github: "not a url", linkedin: "http://example.com", email: "hello@example.com\r\nSubject:Injected" },
])("invalid social destinations stay non-interactive", (links) => {
  render(<Footer locale="pt-BR" year={2030} links={links} />);
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).not.toHaveTextContent(/\[ADD/);
});
