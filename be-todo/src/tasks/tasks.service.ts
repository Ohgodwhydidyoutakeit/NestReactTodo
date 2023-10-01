
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from '../schemas/tasks/task.interface';
import { CreateNewTaskDto } from './dto/create-new-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';




@Injectable()
export class TaskService {
    constructor(
        @Inject('TASK_MODEL')
        private taskModel: Model<Task>,
    ) { }


    async createTask(createTaskDto: CreateNewTaskDto) {
        const { content } = createTaskDto
        const { length } = await this.taskModel.find()
        const createdTask = new this.taskModel({
            customId: length + 1,
            content: content,
            isDone: false
        })
        return await createdTask.save()
    }

    async updateTask(id: number, updateTaskDto: UpdateTaskDto) {
        const updatedTask = await this.taskModel.findOneAndUpdate({ customId: id, }, updateTaskDto, { new: true })
        return updatedTask
    }

    async deleteAll(): Promise<unknown> {
        return await this.taskModel.deleteMany()
    }


    async findAll(): Promise<Task[]> {

        return await this.taskModel.find()
    }
}
