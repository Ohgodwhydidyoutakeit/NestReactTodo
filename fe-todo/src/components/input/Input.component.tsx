import React, {
  ChangeEvent,
  FC,
  RefObject,
  forwardRef,
  useRef,
  useState,
} from "react";

import "./Input.component.scss";
import { t } from "i18next";

interface IInputProp {
  onChangeInput: (value: string) => void;
  value: string;
  forwardedRef: RefObject<HTMLInputElement>;
}
export const Input: FC<IInputProp> = forwardRef<HTMLInputElement, IInputProp>(
  (props: IInputProp, ref) => {
    const changing = (e: React.ChangeEvent<HTMLInputElement>) => {
      props.onChangeInput(e.target.value);
    };

    return (
      <input
        placeholder={t("components.input-placeholder")}
        ref={props.forwardedRef}
        value={props.value}
        onChange={(e) => changing(e)}
        className="custom-input"
      ></input>
    );
  },
);
