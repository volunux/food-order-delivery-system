import { Module } from '@nestjs/common';
import { MenuServiceImpl } from './service/menu.service.impl';
import { MenuRepositoryImpl } from './repository/menu.repository.impl';
import { MenuController } from './menu.controller';

@Module({
  controllers: [MenuController],
  providers: [MenuServiceImpl, MenuRepositoryImpl]
})
export class MenuModule {}
