import { render } from "@testing-library/react";
import { Card } from "./Card.component";

it("renders without crashing", () => {
  render(<Card />);
});
