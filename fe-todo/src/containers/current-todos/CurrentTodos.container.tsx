import { FC, RefObject, forwardRef, useRef } from "react";

import "./CurrentTodos.container.scss";
import { useAppSelector } from "../../store/hooks";
import { Card } from "../../components/card/Card.component";
import Draggable from "react-draggable";
import { node } from "prop-types";





export const CurrentTodosContainer: FC = () => {
    const todos = useAppSelector((state) => state.todos);
    const nodeRef = useRef(null);



    return (
        <div className="current-todos-container" >
            <div>

                {todos.map((element, index) => {
                    return (
                        <Card>
                            {element}
                        </Card>

                    )

                })}
            </div>

        </div >
    );
};
