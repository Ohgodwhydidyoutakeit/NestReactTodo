import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateNewTaskDto, ICreateNewTaskDto } from './dto/create-new-task.dto';
import { IUpdateTaskDto, UpdateTaskDto } from './dto/update-task.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrometheusService } from 'src/prometheus/prometheus.service';


@ApiTags('Tasks')
@Controller('tasks')

export class TasksController {
  constructor(private readonly taskService: TaskService, private readonly prometheusService: PrometheusService) { }

  @Post('/create')
  @ApiOperation({ summary: 'Create a new task' })
  @ApiBody({ type: CreateNewTaskDto, description: 'Details for creating a new task' })
  @ApiResponse({ status: 201, description: 'Task created successfully.' })
  createTask(@Body() createTaskDto: ICreateNewTaskDto) {
    return this.taskService.createTask(createTaskDto);
  }

  @Patch('/update/:id')
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'Task ID' })
  @ApiBody({ type: UpdateTaskDto, description: 'Details for updating a task' })
  @ApiResponse({ status: 200, description: 'Task updated successfully.' })
  @ApiResponse({ status: 404, description: 'Task not found.' })
  updateTask(@Param('id') id: string, @Body() updateTaskDto: IUpdateTaskDto) {
    return this.taskService.updateTask(+id, updateTaskDto);
  }

  @Post('/deleteAll')
  @ApiOperation({ summary: 'Delete all tasks' })
  @ApiResponse({ status: 200, description: 'All tasks deleted successfully.' })
  deleteAll() {
    return this.taskService.deleteAll();
  }

  @Get('/all')
  @ApiOperation({ summary: 'Retrieve all tasks' })
  @ApiResponse({ status: 200, description: 'List of all tasks.' })
  findAll() {
    this.prometheusService.incrementRequestCounter();
    return this.taskService.findAll();
  }
}
