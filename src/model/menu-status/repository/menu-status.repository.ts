import { Injectable } from '@nestjs/common';
import { MenuStatus } from '../entities/menu-status.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface MenuStatusRepository extends CrudXRepository<MenuStatus> {

}
