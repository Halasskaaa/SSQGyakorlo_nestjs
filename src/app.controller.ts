import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      title: 'My First NestJS App'
    }
  }

  @Get('macskak')
  @Render('macskak')
  async getMacskak() {
    return {
      title: 'Macskák',
      macskak: await this.appService.getMacskak()
    }
  }
}
