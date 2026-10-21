import { Body, Controller, Get, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { title } from 'process';
import { UjJatekDto } from './ujJatek.dto.js';

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

  @Get('jatekok')
  @Render('jatekok')
  async getJatekok() {
    return {
      title: 'Játékok',
      jatekok: await this.appService.getJatekok()
    }
  }

  // https://github.com/Halasskaaa/nestjsFork1/blob/main/src/app.controller.ts
  // https://github.com/Halasskaaa/nestjsFork1/blob/main/views/search.ejs
  // @Get('macskaKeres')
  // @Render('macskaKeres')
  // kereso(@Query('szem_szin') szin?: string) {
  //   const searchEyes = szin?.toLowerCase() ?? '';

  //   const results = this.appService.getMacskak().filter(szem =>
  //     szem.szem_szin.toLowerCase().includes(searchEyes)
  //   );
  // }

  @Get('ujJatek')
  @Render('ujJatekForm')
  async ujJatekForm() {}
  @Post('ujJatek')
  async ujJatek(@Body() body: UjJatekDto) {
    await this.appService.ujJatek(
      body.nev
    )
    return "Sikeres felvétel" + JSON.stringify(this.ujJatek)
  }
}
