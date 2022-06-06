import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Logger} from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT);
  app.enableCors();
  await app.listen(process.env.PORT);
  Logger.log(`어플리케이션 시작 (포트: ${process.env.PORT}) `)
}
bootstrap();
