import { Injectable } from '@nestjs/common';
import { MenuRating } from '../entities/menu-rating.entity';
import { CreateMenuRatingDto } from '../dto/create-menu-rating.dto';
import { UpdateMenuRatingDto } from '../dto/update-menu-rating.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface MenuRatingService extends CrudXService<MenuRating> {

}
