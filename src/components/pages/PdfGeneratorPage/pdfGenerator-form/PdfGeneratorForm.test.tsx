import { fireEvent, render, screen } from "@testing-library/react";
import { describe } from "vitest";
import PdfGeneratorForm from "./PdfGeneratorForm";

describe("PdfGeneratorForm", () => {
  beforeEach(() => {
    render(<PdfGeneratorForm />);
  });
  it("отображает текст 'Загрузите изображение'", () => {
    const textInputFile = screen.getByText(/Загрузите изображение/i);
    expect(textInputFile).toBeInTheDocument();
  });
  it("обновляет значение input заголовка", () => {
    const inputElement = screen.getByTestId<HTMLInputElement>("input-update");
    fireEvent.change(inputElement, { target: { value: "проверка" } });
    expect(inputElement.value).toBe("проверка");
  });
});
