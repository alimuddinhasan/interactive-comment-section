import { render, screen } from "@testing-library/react";
import InputComment from "../InputComment";

describe("InputCommet", () => {
  it("should render default InputComment component", () => {
    render(<InputComment />);
    expect(screen.getByPlaceholderText("Add a comment")).toBeInTheDocument();
    expect(screen.getByAltText("input-user-image")).toBeInTheDocument();
    expect(screen.getByText("SEND")).toBeInTheDocument();
  });
});
