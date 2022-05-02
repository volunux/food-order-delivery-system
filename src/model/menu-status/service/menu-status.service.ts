import { Injectable } from '@nestjs/common';
import { MenuStatus } from '../entities/menu-status.entity';
import { CreateMenuStatusDto } from '../dto/create-menu-status.dto';
import { UpdateMenuStatusDto } from '../dto/update-menu-status.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface MenuStatusService extends CrudXService<MenuStatus> {

}
