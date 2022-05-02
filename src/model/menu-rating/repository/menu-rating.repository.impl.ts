import { Injectable } from '@nestjs/common';
import { MenuRatingRepository } from './menu-rating.repository';
import { MenuRating } from '../entities/menu-rating.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class MenuRatingRepositoryImpl extends AbstractBaseRepositoryImpl<MenuRating> implements MenuRatingRepository {
  protected VxEntity: Newable<MenuRating> = MenuRating;
}
