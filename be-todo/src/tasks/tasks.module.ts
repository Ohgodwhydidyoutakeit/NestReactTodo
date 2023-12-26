import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TaskService } from './tasks.service';
import { taskProvider } from './task.provider';
import { PrometheusModule } from 'src/prometheus/prometheus.module';

@Module({
  imports: [DatabaseModule, PrometheusModule],
  controllers: [TasksController],
  providers: [TaskService, ...taskProvider],
})
export class TasksModule { }
