import { Injectable } from '@nestjs/common';
import { UserStatus } from '../entities/user-status.entity';
import { CreateUserStatusDto } from '../dto/create-user-status.dto';
import { UpdateUserStatusDto } from '../dto/update-user-status.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface UserStatusService extends CrudXService<UserStatus> {

}
