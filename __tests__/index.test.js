import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("renders a button New Game", () => {
    render(<Home />);

    const button = screen.getByText(/New Game/i);

    expect(button).toBeInTheDocument();
  });
});
