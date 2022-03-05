import { MiddlewareConsumer, Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { FirstFilter } from './todo/filters/first.filter';
import { FirstMiddleware } from './todo/middlewares/firstmiddleware.middleware';
import { TodoService } from './todo/service/todo.service';
import { TodoModule } from './todo/todo.module';

@Module({
  imports: [PremierModule, TodoModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: FirstFilter
    }
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer):MiddlewareConsumer | void {
    consumer.apply(FirstMiddleware).forRoutes("*");
  }
}
