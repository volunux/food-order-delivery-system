import { Module } from '@nestjs/common';
import { RoleServiceImpl } from './service/role.service.impl';
import { RoleRepositoryImpl } from './repository/role.repository.impl';
import { RoleController } from './role.controller';

@Module({
  controllers: [RoleController],
  providers: [RoleServiceImpl, RoleRepositoryImpl]
})
export class RoleModule {}
