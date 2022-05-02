import { Injectable } from '@nestjs/common';
import { MenuCategory } from '../entities/menu-category.entity';
import { CreateMenuCategoryDto } from '../dto/create-menu-category.dto';
import { UpdateMenuCategoryDto } from '../dto/update-menu-category.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface MenuCategoryService extends CrudXService<MenuCategory> {

}
