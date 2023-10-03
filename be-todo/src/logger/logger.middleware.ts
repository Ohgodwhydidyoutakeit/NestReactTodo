import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { LoggerSrv } from './logger.service';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: LoggerSrv) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl, ip } = req;
    const date = new Date();
    res.on('finish', () => {
      const { statusCode, statusMessage } = res;
      const logMessage = `${date} ${method} ${originalUrl} ${statusCode} ${statusMessage} ${ip}`;
      this.logger.log(logMessage, 'HTTP');
    });

    next();
  }
}
