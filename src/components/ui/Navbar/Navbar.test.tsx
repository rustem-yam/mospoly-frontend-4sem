import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { DYNAMIC_PAGINATION_ROUTE, PDF_GENERATOR_ROUTE } from "../../routes/configs";
import NavBar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("NavBar", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
  });
  it('отображает ссылку на "Генерация PDF"', () => {
    const linkElement = screen.getByText(/1. Генерация PDF/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")?.slice(1)).toBe(PDF_GENERATOR_ROUTE);
  });

  it('отображает ссылку на "Динамическая пагинация"', () => {
    const linkElement = screen.getByText(/2. Динамическая пагинация/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.getAttribute("href")?.slice(1)).toBe(DYNAMIC_PAGINATION_ROUTE);
  });
});
