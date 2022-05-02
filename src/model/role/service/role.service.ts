import { Injectable } from '@nestjs/common';
import { Role } from '../entities/role.entity';
import { CreateRoleDto } from '../dto/create-role.dto';
import { UpdateRoleDto } from '../dto/update-role.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface RoleService extends CrudXService<Role> {

}
