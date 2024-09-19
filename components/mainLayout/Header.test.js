// Header.test.js
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Header Component", () => {
  it("renders the header component correctly", () => {
    render(<Header />);

    const headerTitle = screen.getByText(/Start selling travel today/i);
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle).toHaveClass("text-white");

    const subTitle = screen.getByText(/on your own website/i);
    expect(subTitle).toBeInTheDocument();

    const tryButton = screen.getByText(/Try it now/i);
    expect(tryButton).toBeInTheDocument();
    expect(tryButton).toHaveClass("text-white");

    const headerImage = screen.getByAltText("Travel Website Example");
    expect(headerImage).toBeInTheDocument();
    expect(headerImage).toHaveClass("w-full h-auto");
  });

  it("applies correct classes for responsiveness", () => {
    render(<Header />);

    const headerTitle = screen.getByText(/Start selling travel today/i);
    expect(headerTitle).toHaveClass("text-3xl md:text-6xl");

    const tryButton = screen.getByText(/Try it now/i);
    expect(tryButton).toHaveClass("w-full max-w-xs md:w-40");
  });
});
