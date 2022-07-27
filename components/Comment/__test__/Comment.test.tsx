import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("should show input component", async () => {
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

    const buttonReply = screen.getByTestId("button-reply");
    await userEvent.click(buttonReply);
    expect(screen.queryByTestId("input-comment-component")).not.toBeNull();
  });

  it("should execute submit handler", async () => {
    const submitHandler = jest.fn();
    render(
      <Comment
        avatar='test'
        comment='test'
        timestamp={new Date()}
        username='test'
        onSubmit={submitHandler}
      >
        <p>Test</p>
      </Comment>
    );
    
    const buttonReply = screen.getByTestId("button-reply");
    await userEvent.click(buttonReply);
    const buttonSubmit = screen.getByTestId("button-submit");
    await userEvent.click(buttonSubmit);

    expect(submitHandler).toBeCalledTimes(1);
  });
});
