import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateNewTaskDto } from './dto/create-new-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService) {

    }


    @Post("/create")
    createTask(@Body() createTaskDto: CreateNewTaskDto) {
        return this.taskService.createTask(createTaskDto)
    }


    @Patch("/update/:id")
    updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
        return this.taskService.updateTask(+id, updateTaskDto)
    }

    @Get("/deleteAll")
    deleteAll() {
        return this.taskService.deleteAll()

    }
    @Get("/all")
    findAll() {
        return this.taskService.findAll()
    }
}
