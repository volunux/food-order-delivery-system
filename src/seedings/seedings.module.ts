import { Module } from '@nestjs/common';
import { SeederService } from './seeder/seeder.service';

@Module({
  providers: [SeederService]
})
export class SeedingsModule {}
