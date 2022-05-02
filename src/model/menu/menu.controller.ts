import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuServiceImpl } from './service/menu.service.impl';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private readonly sevrice: MenuServiceImpl) {

  }
}
