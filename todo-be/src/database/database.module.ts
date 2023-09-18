
import { Module } from '@nestjs/common';
import { DatabaseProvider } from './database.provider';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from 'src/logger/logger.module';

@Module({
    imports: [LoggerModule],
    providers: [...DatabaseProvider],
    exports: [...DatabaseProvider],
})
export class DatabaseModule { }