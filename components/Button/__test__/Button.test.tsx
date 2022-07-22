import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("should render default Button component", () => {
    render(<Button label='Button' />);

    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("text-grayish-blue");
  });

  // it("should render Button with icon", () => {
  //   render(<Button label='Button' icon="test" />);

  //   const icon = screen.getByAltText("icon");
  //   expect(icon).toBeInTheDocument();
  // });
});
