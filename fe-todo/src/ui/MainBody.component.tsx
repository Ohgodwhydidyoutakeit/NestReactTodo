import { FC, RefObject, useEffect, useRef, useState } from "react";
import { DueDate } from "../components/due-date/DueDate.component";
import { WeekDays } from "../components/domain/WeekDays.enum";
import { Priority } from "../components/domain/Priority.enum";
import "./MainBody.component.scss";

import { t } from "i18next";
import { EditArea } from "./edit-area/EditArea.component";
import { Card } from "../components/card/Card.component";
import { Input } from "../components/input/Input.component";
import { ConfirmButton } from "../components/confirm-button/ConfirmButton.component";
import { useAppDispatch } from "../store/hooks";
import { add } from "../store/todos/todosSlice";
import { CurrentTodosContainer } from "../containers/current-todos/CurrentTodos.container";

export const MainBody: FC = () => {
  const [input, setInput] = useState<string>("");
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const dispatch = useAppDispatch();

  const changeButton = () => {
    throw new Error("toBe implemented");
  };

  const handleInput = (e: string) => {
    setInput(e);
  };

  const focusOnInput = () => {
    inputRef.current && inputRef.current.focus();
  };

  const handleSubmit = () => {
    if (input) {
      dispatch(add(input));
      setInput("");
      focusOnInput();
    }
  };

  useEffect(() => {
    focusOnInput();
  }, []);

  return (
    <div className="container">
      <h1>{t("header")}</h1>
      <Card>
        <Input
          onChangeInput={handleInput}
          value={input}
          forwardedRef={inputRef}
        />
        <ConfirmButton
          text={t("components.confirm-button.text")}
          onClick={handleSubmit}
        />
      </Card>
      <CurrentTodosContainer />
    </div>
  );
};
