import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Response } from 'express';
import App from '@client/App';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  getMainPage(@Res() res: Response) {
    const name = 'Yap Wei Chun';
    const url = '/';
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

  @Get('/waybill')
  getWaybillPage(@Res() res: Response) {
    const name = 'Yap Wei Chun';
    const url = '/waybill';
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
