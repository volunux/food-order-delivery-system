import { Injectable } from '@nestjs/common';
import { UserStatus } from '../entities/user-status.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface UserStatusRepository extends CrudXRepository<UserStatus> {

}
