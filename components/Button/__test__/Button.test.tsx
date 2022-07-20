import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("should render default Button component", () => {
    render(<Button />);
    expect(screen.getByText("Button"));
  });
});
