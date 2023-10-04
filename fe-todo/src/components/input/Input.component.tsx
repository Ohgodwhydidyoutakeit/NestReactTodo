import { FC } from "react";


import './Input.component.scss'
import { t } from "i18next";

export const Input: FC = () => {
    return (
        <input placeholder={t("components.input-placeholder")} className="custom-input"></ input>
    )
}