import { Connection, Mongoose } from 'mongoose';
import { TaskSchema } from '../schemas/tasks/task.schema';

export const taskProvider = [
  {
    provide: 'TASK_MODEL',
    useFactory: (mongoose: Mongoose) => {
      return mongoose.model('Task', TaskSchema);
    },
    inject: ['MONGODB_CONNECTION'],
  },
];
