import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder,SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = new ConfigService();


  const swaggerDocumentBuilder = new DocumentBuilder()
  .addBearerAuth()
  .setTitle(configService.get<string>('SYSTEM_TITLE'))
  .setDescription(configService.get<string>('SYSTEM_DESCRIPTION'))
  .setVersion(configService.get<string>('SYSTEM_VERSION'))
  .addTag('teacher-notes')
  .build();

const swaggerDocumentOptions: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
};

const swaggerDocument = SwaggerModule.createDocument(
  app,
  swaggerDocumentBuilder,
  swaggerDocumentOptions,
);

SwaggerModule.setup('api', app, swaggerDocument);

  await app.listen(3000);
}
bootstrap();
