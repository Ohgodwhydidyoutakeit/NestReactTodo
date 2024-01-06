import { FC } from "react";
import { WeekDays } from "../domain/WeekDays.enum";
import { Priority } from "../domain/Priority.enum";
import "./DueDate.component.scss";
import { ClassNameMapper } from "../utils/ClassNameMapper.util";

const DAY_LETTERS = 3;

interface IDueDateProps {
  weekday: WeekDays;
  priority: Priority;
}

export const DueDate: FC<IDueDateProps> = (props: IDueDateProps) => {
  const day = props.weekday.slice(0, DAY_LETTERS);
  return (
    <button className={ClassNameMapper("eui-due-container", props.priority)}>
      {day}
    </button>
  );
};
