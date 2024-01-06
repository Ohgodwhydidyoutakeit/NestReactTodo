import { FC } from "react";
import { DueDate } from "../components/due-date/DueDate.component";
import { WeekDays } from "../components/domain/WeekDays.enum";
import { Priority } from "../components/domain/Priority.enum";
import "./MainBody.component.scss";

import { t } from "i18next";
import { EditArea } from "./edit-area/EditArea.component";
import { Card } from "../components/card/Card.component";
import { Input } from "../components/input/Input.component";
import { ConfirmButton } from "../components/confirm-button/ConfirmButton.component";


export const MainBody: FC = () => {
  return (
    <div className="container">
      <h1>{t('header')}</h1>
      <Card>
        <Input />
        <ConfirmButton text={t("components.confirm-button.text")} />
      </Card>
    </div >
  );
};
