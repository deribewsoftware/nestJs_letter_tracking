/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.enableCors({
    origin: ['https://letter-tracking-frontend.vercel.app', 'http://localhost:3000'],
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(5307);
}
bootstrap();


