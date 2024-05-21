import { render, screen } from "@testing-library/react";
import { describe } from "vitest";
import CardUniversity from "./CardUniversity";
import { IUniversity } from "../types";

describe("CardUniversity", () => {
  const university: IUniversity = { country: "Country", name: "Name" };

  beforeEach(() => {
    render(<CardUniversity data={university} />);
  });

  it("отображает название и страну университета", () => {
    const nameElement = screen.getByText(university.name);
    expect(nameElement).toBeInTheDocument();

    const countryElement = screen.getByText(university.country);
    expect(countryElement).toBeInTheDocument();
  });
});
