import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from '../environment';
import * as fs from 'fs'
import * as express from 'express'
import { ExpressAdapter } from '@nestjs/platform-express';

import * as https from 'https'

const httpsOptions = {
  key: fs.readFileSync(process.cwd() + '/certificates/localhost.key'),
  cert: fs.readFileSync(process.cwd() + '/certificates/localhost.crt'),
};

async function bootstrap() {
  try {
    const server = express()
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(server)
    );

    await app.init()

    const httpsServer = https.createServer(httpsOptions, server).listen(process.env.APP_PORT || environment.port);

    console.log("App listends at some port ", process.env.APP_PORT || environment.port)
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}

bootstrap();
