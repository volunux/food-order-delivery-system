import { Module } from '@nestjs/common';
import { UserStatusServiceImpl } from './service/user-status.service.impl';
import { UserStatusRepositoryImpl } from './repository/user-status.repository.impl';
import { UserStatusController } from './user-status.controller';

@Module({
  controllers: [UserStatusController],
  providers: [UserStatusServiceImpl, UserStatusRepositoryImpl]
})
export class UserStatusModule {}
