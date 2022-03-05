import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SecondInterceptor } from './todo/filters/second.filter';
import { FirstInterceptor } from './todo/interceptors/first.interceptor';
import { logger } from './todo/middlewares/logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true
  })
  );
  app.useGlobalInterceptors(new FirstInterceptor(),new SecondInterceptor());
  app.use(logger);
  await app.listen(3000);
}
bootstrap();
