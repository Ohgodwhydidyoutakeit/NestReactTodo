import { FC, ReactNode } from "react";
import "./Card.component.scss";

interface ICardProps {
  children?: ReactNode;
}

export const Card: FC<ICardProps> = ({ children }: ICardProps) => {
  // card has children and 2 buttons 
  return (
    <div className="card-container">
      <span>{"<"}</span>
      {children}
      <span>{">"}</span>
    </div>

  )
};
