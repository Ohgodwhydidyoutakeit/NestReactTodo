import { Injectable, LoggerService } from '@nestjs/common';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';


const transport = new DailyRotateFile({
    filename: 'logs/application-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
    dirname: 'logs',
});

@Injectable()
export class LoggerSrv implements LoggerService {
    private readonly logger: winston.Logger

    constructor() {
        this.logger = winston.createLogger({
            transports: [
                transport
            ],
        });
    }

    log(message: any, context?: string) {
        this.logger.info(message, { context });
    }

    error(message: any, trace?: string, context?: string) {
        this.logger.error(message, { trace, context });
    }

    warn(message: any, context?: string) {
        this.logger.warn(message, { context });
    }

    debug(message: any, context?: string) {
        this.logger.debug(message, { context });
    }

    verbose(message: any, context?: string) {
        this.logger.verbose(message, { context });
    }
}