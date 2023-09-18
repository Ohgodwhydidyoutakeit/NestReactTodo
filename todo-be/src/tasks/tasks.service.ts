
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Task } from '../schemas/task.schema';



type createTaskDto = {
    content: string,
    isDone: boolean
}


@Injectable()
export class TaskService {
    constructor(
        // @Inject('TASK_MODEL')
        // private catModel: Model<Task>,
    ) { }


    async findAll(): Promise<any> {
        return new Promise((res, rej) => {
            res([1, 2, 3, 4])
        })
    }
}

// !!! TODO USE TRHOW AN ERROR AND HANDLE IT WITH CUSTOM https://docs.nestjs.com/microservices/exception-filters