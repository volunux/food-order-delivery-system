import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface OrderService extends CrudXService<Order> {

}
