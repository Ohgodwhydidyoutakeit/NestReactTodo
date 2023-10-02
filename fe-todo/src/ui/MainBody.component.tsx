import { FC } from "react";
import { DueDate } from "../components/due-date/DueDate.component";
import { WeekDays } from "../components/domain/WeekDays.enum";
import { Priority } from "../components/domain/Priority.enum";
import './MainBody.component.scss'
import { EffortLink } from "../components/effort-links/EffortLink.component";
import { InputCard } from "../components/input-card/InputCard.component";


export const MainBody: FC = () => {
    return <div className="container">
        <h1>
            TODO
        </h1>
        <InputCard />

    </div>
}