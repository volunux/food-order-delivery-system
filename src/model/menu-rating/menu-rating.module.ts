import { Module } from '@nestjs/common';
import { MenuRatingServiceImpl } from './service/menu-rating.service.impl';
import { MenuRatingRepositoryImpl } from './repository/menu-rating.repository.impl';
import { MenuRatingController } from './menu-rating.controller';

@Module({
  controllers: [MenuRatingController],
  providers: [MenuRatingServiceImpl, MenuRatingRepositoryImpl]
})
export class MenuRatingModule {}
