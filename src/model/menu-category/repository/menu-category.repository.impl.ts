import { Injectable } from '@nestjs/common';
import { MenuCategoryRepository } from './menu-category.repository';
import { MenuCategory } from '../entities/menu-category.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class MenuCategoryRepositoryImpl extends AbstractBaseRepositoryImpl<MenuCategory> implements MenuCategoryRepository {
  protected VxEntity: Newable<MenuCategory> = MenuCategory;
}
