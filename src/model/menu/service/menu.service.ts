import { Injectable } from '@nestjs/common';
import { Menu } from '../entities/menu.entity';
import { CreateMenuDto } from '../dto/create-menu.dto';
import { UpdateMenuDto } from '../dto/update-menu.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface MenuService extends CrudXService<Menu> {

}
