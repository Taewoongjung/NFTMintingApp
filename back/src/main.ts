import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from "passport";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
      origin: true,
      credentials: true,
  });
  app.use(cookieParser());
  app.use(
      session({
        resave: false,
        saveUninitialized: false,
        secret: process.env.SECRET,
        cookie: {
          httpOnly: true,
        },
      }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(process.env.PORT);
  console.log(`어플리케이션 시작 (포트: ${process.env.PORT}) `)
}
bootstrap();
