import { Injectable, Inject } from '@nestjs/common';
import { MenuRatingService } from './menu-rating.service';
import { MenuRating } from '../entities/menu-rating.entity';
import { MenuRatingRepositoryImpl } from '../repository/menu-rating.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class MenuRatingServiceImpl extends AbstractBaseServiceImpl<MenuRating> implements MenuRatingService {

  @Inject()
  protected repository: MenuRatingRepositoryImpl;
}
