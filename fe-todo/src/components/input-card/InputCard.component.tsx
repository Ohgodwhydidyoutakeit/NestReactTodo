import { FC } from "react";
import './InputCard.component.scss'
import { DueDate } from "../due-date/DueDate.component";
import { Priority } from "../domain/Priority.enum";
import { WeekDays } from "../domain/WeekDays.enum";



export const InputCard: FC = () => {
    return (
        <div className="card-container">
            <input className="card-container__input" type="text"></input>
            <div className="card-container__selectors">
               
            </div>
        </div>
    )
}