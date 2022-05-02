import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import ConfigurationProperties from '../config/configuration-properties';

@Module({
  providers: [DatabaseService, ConfigurationProperties]
})
export class DatabaseModule {}
