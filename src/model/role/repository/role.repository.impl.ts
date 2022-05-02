import { Injectable } from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { Role } from '../entities/role.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class RoleRepositoryImpl extends AbstractBaseRepositoryImpl<Role> implements RoleRepository {
  protected VxEntity: Newable<Role> = Role;
}
