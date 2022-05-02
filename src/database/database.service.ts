import { Injectable } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import ConfigurationProperties from '../config/configuration-properties';

@Injectable()
export class DatabaseService {

  constructor(private readonly eProps: ConfigurationProperties) { }

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      'type': 'postgres',
      'host': this.eProps.getDatabaseHost(),
      'port': this.eProps.getDatabasePort(),
      'username': this.eProps.getDatabaseUsername(),
      'password': this.eProps.getDatabasePassword(),
      'synchronize': true,
      'logging': true,
      "entities": [join(__dirname, '../model/**/*{.ts,.js}')],
      'entitySkipConstructor': true,
      'dropSchema': false,
      'cache': false,
      'entityPrefix': undefined,
      "extra": {
        "connectionLimit": this.eProps.getMaxNumberOfClientOrm()
      },
      "autoLoadEntities": true,
      'keepConnectionAlive': true,
      
    }
  } 
}
