import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Response } from 'express';
import App from '@client/App';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  @Get()
  getHello(@Res() res: Response) {
    const name = 'Yap Wei Chun';
    const chance = this.getRandomInt(1, 10);
    const url = chance <= 5 ? '/waybill' : '/';
    const component = renderToString(<App url={url} name={name} />);
    console.log('component: ', component);

    const html = `
    <!doctype html>
      <html>
      <body>
        <div id="root">${component}</div>
      </body>
    </html>`;

    return res.send(html);
  }
}
