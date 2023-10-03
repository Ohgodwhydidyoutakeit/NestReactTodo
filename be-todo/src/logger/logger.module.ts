import { MiddlewareConsumer, Module } from '@nestjs/common';
import { LoggerSrv } from './logger.service';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  providers: [LoggerSrv],
  exports: [LoggerSrv],
})
export class LoggerModule {
  configure(consumer: MiddlewareConsumer) {
    // i wanna know it all -- could have done a interceptor doe with different statuses but meh
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
