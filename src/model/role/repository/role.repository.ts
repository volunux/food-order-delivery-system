import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface RoleRepository extends CrudXRepository<Role> {

}
