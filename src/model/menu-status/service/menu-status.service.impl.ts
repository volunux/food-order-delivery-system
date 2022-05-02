import { Injectable, Inject } from '@nestjs/common';
import { MenuStatusService } from './menu-status.service';
import { MenuStatus } from '../entities/menu-status.entity';
import { MenuStatusRepositoryImpl } from '../repository/menu-status.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class MenuStatusServiceImpl extends AbstractBaseServiceImpl<MenuStatus> implements MenuStatusService {

  @Inject()
  protected repository: MenuStatusRepositoryImpl;
}
