import { Injectable } from '@nestjs/common';
import { MenuRating } from '../entities/menu-rating.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface MenuRatingRepository extends CrudXRepository<MenuRating> {

}
