
import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from 'src/logger/logger.module';
import { DatabaseController } from './database.controller';

@Module({
    imports: [LoggerModule],
    providers: [...DatabaseProvider],
    exports: [...DatabaseProvider],
    controllers: [DatabaseController],
})
export class DatabaseModule { }