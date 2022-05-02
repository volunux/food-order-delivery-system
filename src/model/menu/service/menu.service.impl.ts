import { Injectable, Inject } from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from '../entities/menu.entity';
import { MenuRepositoryImpl } from '../repository/menu.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class MenuServiceImpl extends AbstractBaseServiceImpl<Menu> implements MenuService {

  @Inject()
  protected repository: MenuRepositoryImpl;
}
