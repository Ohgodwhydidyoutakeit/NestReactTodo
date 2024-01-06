import { FC } from "react";

import './ConfirmButton.component.scss'


interface IConfirmButtonProps {
    text: string
}
export const ConfirmButton: FC<IConfirmButtonProps> = (props: IConfirmButtonProps) => {
    return (
        <button className="confirmButton-container">{props.text}</button>
    )
}