import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AirportsController } from './airports.controller';
import { AirportsService } from './airports.service';

@Module({
  imports: [],
  controllers: [AirportsController],
  providers: [AirportsService, PrismaService],
})
export class AirportsModule {}
