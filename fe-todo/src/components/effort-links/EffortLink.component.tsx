import { FC } from "react";
import { Priority } from "../domain/Priority.enum";
import { ClassNameMapper } from "../utils/ClassNameMapper.util";

import "./EffortLink.component.scss";

interface IEffortLinkProps {
  priority: Priority;
}

export const EffortLink: FC<IEffortLinkProps> = (props: IEffortLinkProps) => {
  return (
    <span className={ClassNameMapper("eui-effort-link", props.priority)}></span>
  );
};
