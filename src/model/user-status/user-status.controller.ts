import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserStatusServiceImpl } from './service/user-status.service.impl';
import { CreateUserStatusDto } from './dto/create-user-status.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';

@Controller('user-status')
export class UserStatusController {
  constructor(private readonly sevrice: UserStatusServiceImpl) {

  }
}
