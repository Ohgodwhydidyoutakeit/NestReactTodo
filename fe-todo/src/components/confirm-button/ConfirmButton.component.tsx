import { FC } from "react";

import "./ConfirmButton.component.scss";

interface IConfirmButtonProps {
  text: string;
  onClick: () => void;
}
export const ConfirmButton: FC<IConfirmButtonProps> = (
  props: IConfirmButtonProps,
) => {
  return (
    <button className="confirmButton-container" onClick={props.onClick}>
      {props.text}
    </button>
  );
};
