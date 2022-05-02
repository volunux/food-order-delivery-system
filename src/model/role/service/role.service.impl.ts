import { Injectable, Inject } from '@nestjs/common';
import { RoleService } from './role.service';
import { Role } from '../entities/role.entity';
import { RoleRepositoryImpl } from '../repository/role.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class RoleServiceImpl extends AbstractBaseServiceImpl<Role> implements RoleService {

  @Inject()
  protected repository: RoleRepositoryImpl;
}
