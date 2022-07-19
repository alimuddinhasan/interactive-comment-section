import { render, screen } from "@testing-library/react";
import Comment from "../Comment";

describe("Comment", () => {
  it("should render default Comment component", () => {
    render(<Comment />);
    expect(screen.getByText("amyrobson")).toBeInTheDocument();
  });
});
