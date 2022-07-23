import { render, screen } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("should render default Button component", () => {
    render(<Button label='Button' />);

    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      "bg-grayish-blue text-very-light-gray rounded-xl"
    );
  });

  it("should render Button with additional className", () => {
    render(<Button label='Button' className='test' />);

    const button = screen.getByText("Button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("test");
  });

  it("should render Button with icon", () => {
    render(<Button label='Button' icon='test' />);

    const icon = screen.getByAltText("icon");
    expect(icon).toBeInTheDocument();
  });

  it("should render flat Button", () => {
    render(<Button label='Button' isFlat />);

    const button = screen.getByText("Button");
    expect(button).toHaveClass("text-grayish-blue");
  });
});
