import { render, screen } from "@testing-library/react";
import Comment from "../Comment";

describe("Comment", () => {
  it("should render default Comment component", () => {
    render(
      <Comment
        avatar='test'
        comment='test'
        timestamp={new Date()}
        username='test'
      />
    );
    expect(screen.getByText("amyrobson")).toBeInTheDocument();
  });

  it("should render with children", () => {
    render(
      <Comment
        avatar='test'
        comment='test'
        timestamp={new Date()}
        username='test'
      >
        <p>Test</p>
      </Comment>
    );
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("should hide input component", () => {
    render(
      <Comment
        avatar='test'
        comment='test'
        timestamp={new Date()}
        username='test'
      >
        <p>Test</p>
      </Comment>
    );
    expect(screen.queryByTestId("input-comment-component")).toBeNull();
  });

  it("should show input component", () => {
    render(
      <Comment
        avatar='test'
        comment='test'
        timestamp={new Date()}
        username='test'
        showInput
      >
        <p>Test</p>
      </Comment>
    );
    expect(screen.queryByTestId("input-comment-component")).not.toBeNull();
  });
});
