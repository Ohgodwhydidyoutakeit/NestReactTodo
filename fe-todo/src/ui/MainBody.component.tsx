import { FC } from "react";
import { DueDate } from "../components/due-date/DueDate.component";
import { WeekDays } from "../components/domain/WeekDays.enum";
import { Priority } from "../components/domain/Priority.enum";
import "./MainBody.component.scss";

import { t } from "i18next";
import { InputCard } from "../components/input-card/InputCard.component";


export const MainBody: FC = () => {
  return (
    <div className="container">
      <h1>
        <h1>{t('header')}</h1>
      </h1>
    </div>
  );
};
