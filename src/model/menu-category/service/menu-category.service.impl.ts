import { Injectable, Inject } from '@nestjs/common';
import { MenuCategoryService } from './menu-category.service';
import { MenuCategory } from '../entities/menu-category.entity';
import { MenuCategoryRepositoryImpl } from '../repository/menu-category.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class MenuCategoryServiceImpl extends AbstractBaseServiceImpl<MenuCategory> implements MenuCategoryService {

  @Inject()
  protected repository: MenuCategoryRepositoryImpl;
}
