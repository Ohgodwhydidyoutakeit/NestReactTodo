import { Controller, Get } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly taskService: TaskService) {

    }

    @Get("/")
    getHello() {
        return this.taskService.findAll()
    }
}
