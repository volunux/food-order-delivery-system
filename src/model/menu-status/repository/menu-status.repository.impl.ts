import { Injectable } from '@nestjs/common';
import { MenuStatusRepository } from './menu-status.repository';
import { MenuStatus } from '../entities/menu-status.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class MenuStatusRepositoryImpl extends AbstractBaseRepositoryImpl<MenuStatus> implements MenuStatusRepository {
  protected VxEntity: Newable<MenuStatus> = MenuStatus;
}
