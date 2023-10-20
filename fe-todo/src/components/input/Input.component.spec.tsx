import React, { RefObject } from "react";
import { Input } from "./Input.component";
import { fireEvent, render } from "@testing-library/react";

describe("InputComponent", () => {
  const handleChange = jest.fn();
  const mockValue = "TEST";
  const inputRef: RefObject<HTMLInputElement> = React.createRef();
  it("renders without crashing", () => {
    render(
      <Input
        forwardedRef={inputRef}
        onChangeInput={handleChange}
        value={mockValue}
      />,
    );
  });
  it("should call onChange when input value changes", () => {
    const { getByRole } = render(
      <Input
        forwardedRef={inputRef}
        onChangeInput={handleChange}
        value={mockValue}
      />,
    );

    const inputElement = getByRole("textbox");

    fireEvent.change(inputElement, { target: { value: "Test" } });

    expect(handleChange).toHaveBeenCalledWith("Test");
  });
  //  TODO ADD THIS UNIT
  // it ('should change value on value change', () => {

  // })

  // TODO ADD THIS UNIT
  // it('should correctly useRef', ()=>{

  // })
});
