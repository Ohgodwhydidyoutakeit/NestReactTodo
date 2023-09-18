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
  imports: [
    // MongooseModule.forRoot(process.env.MONGODB_URL || environment.mongoDbUrl,),
    // WinstonModule.forRoot({
    //   transports: [
    //     // let's log errors into its own file
    //     new transports.File({
    //       filename: `logs/error.log`,
    //       level: 'error',
    //       format: format.combine(format.timestamp(), format.json()),
    //     }),
    //     // logging all level
    //     new transports.File({
    //       filename: `logs/combined.log`,
    //       format: format.combine(format.timestamp(), format.json()),
    //     }),
    //     // we also want to see logs in our console
    //     new transports.Console({
    //       format: format.combine(
    //         format.cli(),
    //         format.splat(),
    //         format.timestamp(),
    //         format.printf((info) => {
    //           return `${info.timestamp} ${info.level}: ${info.message}`;
    //         }),
    //       ),
    //     }),
    //   ],
    // }),
    TasksModule,
    DatabaseModule,
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService,],
})
export class AppModule {
}
