import { render, screen } from "@testing-library/react";
import InputComment from "../InputComment";

describe("InputCommet", () => {
  it("should render default InputComment component", () => {
    render(<InputComment />);
    expect(screen.getByText("InputComment")).toBeInTheDocument();
  });
});
