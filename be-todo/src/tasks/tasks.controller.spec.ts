import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';
import { Task } from 'src/schemas/tasks/task.interface';
import { CreateNewTaskDto } from './dto/create-new-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

describe('TasksController', () => {
  let taskContoller: TasksController;
  let taskService: TaskService;

  const mockTaskModel = {};

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [
        TaskService,
        {
          provide: 'TASK_MODEL',
          useValue: mockTaskModel,
        },
      ],
    }).compile();

    taskService = moduleRef.get<TaskService>(TaskService);
    taskContoller = moduleRef.get<TasksController>(TasksController);
  });

  it('Should be defined', () => {
    expect(taskContoller).toBeDefined();
  });

  describe('Controller returns proper values', () => {
    it('Should create a new task', async () => {
      const createTaskDto: CreateNewTaskDto = {
        content: 'Test content',
      };

      const createdTask = {
        isDone: true,
        content: createTaskDto.content,
        customId: 3,
      };

      jest
        .spyOn(taskService, 'createTask')
        .mockResolvedValue(createdTask as any);
      expect(await taskContoller.createTask(createTaskDto)).toBe(createdTask);
    });

    it('Should update a task', async () => {
      const id = '1'; // Provide a valid task ID
      const updateTaskDto: UpdateTaskDto = {
        isDone: true,
        newContent: 'New content',
      };

      const updatedTask = {
        customId: 1,
        content: updateTaskDto.newContent,
        isDone: updateTaskDto.isDone,
      }; // Define your expected updated task object

      jest
        .spyOn(taskService, 'updateTask')
        .mockResolvedValue(updatedTask as any);

      expect(await taskContoller.updateTask(id, updateTaskDto)).toBe(
        updatedTask,
      );
    });
  });

  describe('Should delete all tasks', () => {
    const tasks = [
      {
        customId: 1,
        content: 'SomeTASK',
        isDone: false,
      },
      {
        customId: 2,
        content: 'SomeTASK',
        isDone: false,
      },
    ];

    it('Should return array of tasks', async () => {
      jest.spyOn(taskService, 'findAll').mockResolvedValue(tasks as any);

      expect(await taskContoller.findAll()).toBe(tasks);
    });

    it('Should return correct value of removed items', async () => {
      const response = {
        acknowledged: true,
        deletedCount: 3,
      };
      jest.spyOn(taskService, 'deleteAll').mockResolvedValue(response as any);

      expect(await taskContoller.deleteAll()).toBe(response);
    });
  });
});
