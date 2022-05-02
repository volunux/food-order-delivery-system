import { Injectable } from '@nestjs/common';
import { UserStatusRepository } from './user-status.repository';
import { UserStatus } from '../entities/user-status.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class UserStatusRepositoryImpl extends AbstractBaseRepositoryImpl<UserStatus> implements UserStatusRepository {
  protected VxEntity: Newable<UserStatus> = UserStatus;
}
