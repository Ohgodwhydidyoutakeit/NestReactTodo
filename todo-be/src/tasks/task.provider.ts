
import { Connection } from 'mongoose';
import { TaskSchema } from '../schemas/task.schema';

export const taskProvider = [
    {
        provide: 'TASK_MODEL',
        useFactory: (connection: Connection) => connection.model('Tasks', TaskSchema),
        inject: ['MONGODB_CONNECTION'],
    },
];