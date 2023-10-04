import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { Response } from 'express';
import Main from '@client/main';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Res() res: Response) {
    const name = 'Yap Wei Chun';
    const component = renderToString(<Main url="/waybill" name={name} />);

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
