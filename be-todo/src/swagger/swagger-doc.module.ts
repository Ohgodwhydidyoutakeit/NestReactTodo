import { Module, DynamicModule, INestApplication } from '@nestjs/common';
import { SwaggerModule as NestSwaggerModule, DocumentBuilder } from '@nestjs/swagger';

@Module({})
export class SwaggerDocsModule {

  static forRoot(app: INestApplication): DynamicModule {
    const options = new DocumentBuilder()
      .setTitle('Your API Title')
      .setDescription('API Description')
      .setVersion('1.0')
      .addTag('Tasks')
      .build();

    const document = NestSwaggerModule.createDocument(app, options);
    NestSwaggerModule.setup('/swagger', app, document);

    return {
      module: SwaggerDocsModule,
    };
  }
}
