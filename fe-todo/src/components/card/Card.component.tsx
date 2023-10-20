import { FC, ReactNode } from "react";
import "./Card.component.scss";

interface ICardProps {
  children?: ReactNode;
}

export const Card: FC<ICardProps> = ({ children }: ICardProps) => {
  return <div className="card-container">{children}</div>;
};
