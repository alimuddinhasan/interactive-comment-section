import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "../Counter";

describe("Counter", () => {
  it("should render default Counter component", () => {
    render(<Counter value={33} />);
    expect(screen.getByText("33")).toBeInTheDocument();
    expect(screen.getByTestId("button-plus")).toBeInTheDocument();
    expect(screen.getByTestId("button-minus")).toBeInTheDocument();
  });

  it("should execute onIncrease when button pressed", async () => {
    const increaseHandler = jest.fn();
    render(<Counter value={33} onIncrease={increaseHandler} />);
    const button = screen.getByTestId("button-plus");
    await userEvent.click(button);
    expect(increaseHandler).toBeCalledTimes(1);
  });

  it("should execute onDecrease when button pressed", async () => {
    const decreaseHandler = jest.fn();
    render(<Counter value={33} onDecrease={decreaseHandler} />);
    const button = screen.getByTestId("button-minus");
    await userEvent.click(button);
    expect(decreaseHandler).toBeCalledTimes(1);
  });
});
