import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import PdfGeneratorPage from "./PdfGeneratorPage";

describe("PdfGeneratorPage", () => {
  beforeEach(() => {
    render(<PdfGeneratorPage />);
  });
  it("отображает заголовок", () => {
    const headingElement = screen.getByText("Генерация PDF-файла");
    expect(headingElement).toBeInTheDocument();
  });
});
