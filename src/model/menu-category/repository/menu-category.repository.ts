import { Injectable } from '@nestjs/common';
import { MenuCategory } from '../entities/menu-category.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface MenuCategoryRepository extends CrudXRepository<MenuCategory> {

}
