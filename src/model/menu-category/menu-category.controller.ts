import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuCategoryServiceImpl } from './service/menu-category.service.impl';
import { CreateMenuCategoryDto } from './dto/create-menu-category.dto';
import { UpdateMenuCategoryDto } from './dto/update-menu-category.dto';

@Controller('menu-category')
export class MenuCategoryController {
  constructor(private readonly sevrice: MenuCategoryServiceImpl) {

  }
}
