import { LoggerService, Provider } from '@nestjs/common';
import { environment } from 'environment'
import * as mongoose from 'mongoose'
import { LoggerSrv } from 'src/logger/logger.service';

export const DatabaseProvider  = [
    {
        provide: "MONGODB_CONNECTION",
        useFactory: async (loggerService: LoggerSrv) => {
            try {
                await mongoose.connect(environment.mongoDbUrl, {
                    connectTimeoutMS: 3000
                });
                loggerService.log("Connected to DB")
            } catch (error) {
                loggerService.error(error)
            }

        },
        inject:[LoggerSrv]
    }
]
