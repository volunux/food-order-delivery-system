import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuRatingServiceImpl } from './service/menu-rating.service.impl';
import { CreateMenuRatingDto } from './dto/create-menu-rating.dto';
import { UpdateMenuRatingDto } from './dto/update-menu-rating.dto';

@Controller('menu-rating')
export class MenuRatingController {
  constructor(private readonly sevrice: MenuRatingServiceImpl) {

  }
}
