import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { environment } from 'environment';
import { WinstonModule } from 'nest-winston';
import { transports, format } from 'winston';
import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [TasksModule, DatabaseModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
