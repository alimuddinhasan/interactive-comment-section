import { render, screen } from "@testing-library/react";
import InputComment from "../InputComment";

describe("InputCommet", () => {
  it("should render default InputComment component", () => {
    render(<InputComment />);
    expect(screen.getByPlaceholderText("Add a comment")).toBeInTheDocument();
    expect(screen.getAllByAltText("input-user-image").length).toEqual(2);
    expect(screen.getAllByText("SEND").length).toEqual(2);
  });
});
