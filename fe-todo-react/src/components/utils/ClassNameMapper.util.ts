import { Priority } from "../domain/Priority.enum";

export const ClassNameMapper = (baseClass: string, priority: Priority) => {
  switch (priority) {
    case Priority.HIGH:
      return `${baseClass} ${baseClass}--priority-high`;
    case Priority.MEDIUM:
      return `${baseClass} ${baseClass}--priority-medium`;
    case Priority.LOW:
      return `${baseClass} ${baseClass}--priority-low`;
    default:
      return `${baseClass}`;
  }
};
