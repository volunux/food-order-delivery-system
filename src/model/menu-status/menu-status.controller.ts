import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MenuStatusServiceImpl } from './service/menu-status.service.impl';
import { CreateMenuStatusDto } from './dto/create-menu-status.dto';
import { UpdateMenuStatusDto } from './dto/update-menu-status.dto';

@Controller('menu-status')
export class MenuStatusController {
  constructor(private readonly sevrice: MenuStatusServiceImpl) {

  }
}
