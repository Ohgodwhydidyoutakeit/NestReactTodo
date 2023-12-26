export interface IUpdateTaskDto {
  newContent?: string;
  isDone?: boolean;
}

export class UpdateTaskDto implements IUpdateTaskDto {
  isDone?: boolean;
  newContent?: string;
}