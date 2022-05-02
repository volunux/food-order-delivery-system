import { Injectable } from '@nestjs/common';
import { Menu } from '../entities/menu.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface MenuRepository extends CrudXRepository<Menu> {

}
