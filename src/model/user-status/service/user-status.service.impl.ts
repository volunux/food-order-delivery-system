import { Injectable, Inject } from '@nestjs/common';
import { UserStatusService } from './user-status.service';
import { UserStatus } from '../entities/user-status.entity';
import { UserStatusRepositoryImpl } from '../repository/user-status.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class UserStatusServiceImpl extends AbstractBaseServiceImpl<UserStatus> implements UserStatusService {

  @Inject()
  protected repository: UserStatusRepositoryImpl;
}
