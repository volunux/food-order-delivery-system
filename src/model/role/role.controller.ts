import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoleServiceImpl } from './service/role.service.impl';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('role')
export class RoleController {
  constructor(private readonly sevrice: RoleServiceImpl) {

  }
}
