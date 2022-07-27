import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import InputComment from "../InputComment";

describe("InputCommet", () => {
  it("should render default InputComment component", () => {
    render(<InputComment />);
    expect(screen.getByPlaceholderText("Add a comment")).toBeInTheDocument();
    expect(screen.getAllByAltText("input-user-image").length).toEqual(2);
    expect(screen.getAllByText("SEND").length).toEqual(2);
  });

  it('should call submit handler', async() => {
    const submitHandler = jest.fn();
    render(<InputComment onSubmit={submitHandler} />);

    const buttons = screen.getAllByText("SEND")
    await userEvent.click(buttons[0])
    await userEvent.click(buttons[1])
    expect(submitHandler).toBeCalledTimes(2)
  });
});
