export interface ICreateNewTaskDto {
  content: string;
}

export class CreateNewTaskDto implements ICreateNewTaskDto {
  content: string;
} 