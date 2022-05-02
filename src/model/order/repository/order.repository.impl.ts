import { Injectable } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { Order } from '../entities/order.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class OrderRepositoryImpl extends AbstractBaseRepositoryImpl<Order> implements OrderRepository {
  protected VxEntity: Newable<Order> = Order;
}
