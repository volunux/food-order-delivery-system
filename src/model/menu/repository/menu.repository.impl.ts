import { Injectable } from '@nestjs/common';
import { MenuRepository } from './menu.repository';
import { Menu } from '../entities/menu.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class MenuRepositoryImpl extends AbstractBaseRepositoryImpl<Menu> implements MenuRepository {
  protected VxEntity: Newable<Menu> = Menu;
}
