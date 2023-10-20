import { FC } from "react";

import "./CurrentTodos.container.scss";
import { useAppSelector } from "../../store/hooks";
import { Card } from "../../components/card/Card.component";
import Draggable from "react-draggable";

export const CurrentTodosContainer: FC = () => {
    const todos = useAppSelector((state) => state.todos);

    const eventHandler = (e : any) => {
        console.log('Event Type', e.type);
        console.log({ e });
    }

    return (
        <div className="current-todos-container">
            {todos.map((element, index) => {
                return (
                    <Draggable
                        axis="x"
                        onDrag={eventHandler}
                        handle=".handle"
                        defaultPosition={{ x: 0, y: 0 }}
                        grid={[25, 25]}
                        scale={1}
                        key={index}>
                        <Card>{element}</Card>
                    </Draggable>
                )

            })}
        </div>
    );
};
