import { Module } from '@nestjs/common';
import { MenuStatusServiceImpl } from './service/menu-status.service.impl';
import { MenuStatusRepositoryImpl } from './repository/menu-status.repository.impl';
import { MenuStatusController } from './menu-status.controller';

@Module({
  controllers: [MenuStatusController],
  providers: [MenuStatusServiceImpl, MenuStatusRepositoryImpl]
})
export class MenuStatusModule {}
