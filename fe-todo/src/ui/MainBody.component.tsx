import { FC } from "react";
import { DueDate } from "../components/due-date/DueDate.component";
import { WeekDays } from "../components/domain/WeekDays.enum";
import { Priority } from "../components/domain/Priority.enum";
import "./MainBody.component.scss";
import { EffortLink } from "../components/effort-links/EffortLink.component";

export const MainBody: FC = () => {
  return (
    <div className="container">
      <DueDate weekday={WeekDays.FRIDAY} priority={Priority.LOW} />
      <EffortLink priority={Priority.HIGH} />
    </div>
  );
};
