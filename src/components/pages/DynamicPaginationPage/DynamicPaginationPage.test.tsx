import "intersection-observer";
import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import DynamicPaginationPage from "./DynamicPaginationPage";

describe("CardUniversity", () => {
  beforeEach(() => {
    render(<DynamicPaginationPage />);
  });

  it("отображает заголовок", () => {
    const headingElement = screen.getByText("List Universities");
    expect(headingElement).toBeInTheDocument();
  });
});
