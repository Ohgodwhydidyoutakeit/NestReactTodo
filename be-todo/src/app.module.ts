import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';

import { DatabaseModule } from './database/database.module';
import { LoggerModule } from './logger/logger.module';
import { SwaggerDocsModule } from './swagger/swagger-doc.module';

@Module({
  imports: [TasksModule, DatabaseModule, LoggerModule, SwaggerDocsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
