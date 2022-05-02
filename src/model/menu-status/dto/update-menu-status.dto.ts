import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuStatusDto } from './create-menu-status.dto';

export class UpdateMenuStatusDto extends PartialType(CreateMenuStatusDto) {}
