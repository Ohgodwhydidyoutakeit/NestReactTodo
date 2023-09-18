import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TaskService } from './tasks.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TasksController],
  providers: [TaskService,]

})
export class TasksModule { }
