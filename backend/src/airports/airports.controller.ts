import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AirportsService } from './airports.service';

@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Get('search')
  async findAirportsApi(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const name = req.query.name as string;
    const iata = req.query.iata as string;
    const city = req.query.city as string;
    const country = req.query.country as string;
    const page = req.query.page as string;
    const limit = req.query.limit as string;

    const { take, skip } = this.airportsService.getSkipAndTake(page, limit);

    const airports = await this.airportsService.findAirports(
      skip,
      take,
      name,
      iata,
      city,
      country,
    );
    if (airports.length === 0)
      return res.status(404).send('No Airports Found!');
    return res.status(200).json(airports);
  }

  @Get('count')
  async getCountApi(
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<Response> {
    const name = req.query.name as string;
    const iata = req.query.iata as string;
    const city = req.query.city as string;
    const country = req.query.country as string;
    const count = await this.airportsService.getCount(
      name,
      iata,
      city,
      country,
    );
    return res.status(200).json(count);
  }
}
