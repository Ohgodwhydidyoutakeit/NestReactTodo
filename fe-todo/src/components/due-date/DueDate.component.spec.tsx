import React from "react";
import ReactDOM from "react-dom";
import { DueDate } from "./DueDate.component";
import { render } from "@testing-library/react";
import { WeekDays } from "../domain/WeekDays.enum";
import { Priority } from "../domain/Priority.enum";

// ! TODO PARAMETRIZED
it("renders without crashing", () => {
  render(<DueDate weekday={WeekDays.FRIDAY} priority={Priority.MEDIUM} />);
});
