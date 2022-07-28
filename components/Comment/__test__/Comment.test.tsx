import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Comment from "../Comment";

describe("Comment", () => {
  it("should render default Comment component", () => {
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        score={33}
      />
    );
    expect(screen.getByText("username")).toBeInTheDocument();
    expect(screen.getByText("timestamp")).toBeInTheDocument();
    expect(screen.getByText("comment")).toBeInTheDocument();
  });

  it("should render with children", () => {
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        score={33}
      >
        <p>Test</p>
      </Comment>
    );
    expect(screen.getByTestId("children")).toBeInTheDocument();
  });

  it("should hide input component", () => {
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        score={33}
      >
        <p>Test</p>
      </Comment>
    );
    expect(screen.queryByTestId("input-comment-component")).toBeNull();
  });

  it("should show input component", async () => {
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        score={33}
      >
        <p>Test</p>
      </Comment>
    );

    const buttonReply = screen.getAllByTestId("button-reply");
    await userEvent.click(buttonReply[0]);
    expect(screen.queryByTestId("input-comment-component")).not.toBeNull();
  });

  it("should execute submit handler", async () => {
    const submitHandler = jest.fn();
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        onSubmit={submitHandler}
        score={33}
      >
        <p>Test</p>
      </Comment>
    );

    const buttonReply = screen.getAllByTestId("button-reply");
    await userEvent.click(buttonReply[0]);
    const buttonSubmit = screen.getByTestId("button-submit");
    await userEvent.click(buttonSubmit);

    expect(submitHandler).toBeCalledTimes(1);
  });

  it('should execute upvote handler', async () => {
    const upvoteHandler = jest.fn();
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        onUpvote={upvoteHandler}
        score={33}
      >
        <p>Test</p>
      </Comment>
    );

    const buttonUpvote = screen.getAllByTestId("button-plus");
    await userEvent.click(buttonUpvote[0]);

    expect(upvoteHandler).toBeCalledTimes(1);
  });

  it('should execute downvote handler', async () => {
    const downvoteHandler = jest.fn();
    render(
      <Comment
        avatar='avatar'
        comment='comment'
        timestamp='timestamp'
        username='username'
        onDownvote={downvoteHandler}
        score={33}
      >
        <p>Test</p>
      </Comment>
    );

    const buttonUpvote = screen.getAllByTestId("button-minus");
    await userEvent.click(buttonUpvote[0]);

    expect(downvoteHandler).toBeCalledTimes(1);
  });
});
