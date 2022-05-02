import { Injectable } from '@nestjs/common';
import { OrderStatus } from '../entities/order-status.entity';
import { CreateOrderStatusDto } from '../dto/create-order-status.dto';
import { UpdateOrderStatusDto } from '../dto/update-order-status.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface OrderStatusService extends CrudXService<OrderStatus> {

}
