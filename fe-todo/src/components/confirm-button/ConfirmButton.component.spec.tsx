import { ConfirmButton } from "./ConfirmButton.component";
import { render } from "@testing-library/react";

describe("ConfirmButton", () => {
  const handleClick = jest.fn();
  it("renders without crashing", () => {
    render(<ConfirmButton text="test" onClick={handleClick} />);
  });
});
