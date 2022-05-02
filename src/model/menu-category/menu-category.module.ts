import { Module } from '@nestjs/common';
import { MenuCategoryServiceImpl } from './service/menu-category.service.impl';
import { MenuCategoryRepositoryImpl } from './repository/menu-category.repository.impl';
import { MenuCategoryController } from './menu-category.controller';

@Module({
  controllers: [MenuCategoryController],
  providers: [MenuCategoryServiceImpl, MenuCategoryRepositoryImpl]
})
export class MenuCategoryModule {}
