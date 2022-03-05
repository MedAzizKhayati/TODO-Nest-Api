import { Controller, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('test')
  getTest(): string {
    console.log('get');
    return "test";
  }
  @Post('test')
  postTest(): string {
    console.log('post');
    return "test";
  }
  @Put('test')
  putTest(): string {
    console.log('put');
    return "test";
  }
}
