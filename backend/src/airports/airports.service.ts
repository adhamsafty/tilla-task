import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Airport } from '@prisma/client';

@Injectable()
export class AirportsService {
  constructor(private prisma: PrismaService) {}

  async findAirports(
    skip: number,
    take: number,
    name?: string,
    iata?: string,
    city?: string,
    country?: string,
  ): Promise<Airport[] | null> {
    const results = await this.prisma.airport.findMany({
      where: {
        AND: [
          {
            name: {
              search: name,
            },
          },
          {
            iata: {
              search: iata,
            },
          },
          {
            city: {
              search: city,
            },
          },
          {
            country: {
              search: country,
            },
          },
        ],
      },
      skip,
      take,
    });
    return results;
  }

  async getCount(
    name?: string,
    iata?: string,
    city?: string,
    country?: string,
  ): Promise<number> {
    const count = await this.prisma.airport.count({
      where: {
        AND: [
          {
            name: {
              search: name,
            },
          },
          {
            iata: {
              search: iata,
            },
          },
          {
            city: {
              search: city,
            },
          },
          {
            country: {
              search: country,
            },
          },
        ],
      },
    });
    return count;
  }

  getSkipAndTake(pageNumberStr?: string, perPageStr?: string) {
    let pageNumber = parseInt(pageNumberStr);
    let perPage = parseInt(perPageStr);

    if (isNaN(pageNumber)) pageNumber = 1;
    if (isNaN(perPage)) perPage = 10;

    const take = perPage;
    const skip = (pageNumber - 1) * perPage;

    return { take, skip };
  }
}
