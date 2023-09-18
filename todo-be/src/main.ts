import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { environment } from '../environment';


async function bootstrap() {
  try {

    const app = await NestFactory.create(AppModule);
    app.listen(process.env.APP_PORT || environment.port);
    console.log("App listends at some port ", process.env.APP_PORT || environment.port)
  } catch (error) {
    console.error('Error starting the application:', error);
  }
}

bootstrap();
