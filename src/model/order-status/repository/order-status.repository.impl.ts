import { Injectable } from '@nestjs/common';
import { OrderStatusRepository } from './order-status.repository';
import { OrderStatus } from '../entities/order-status.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class OrderStatusRepositoryImpl extends AbstractBaseRepositoryImpl<OrderStatus> implements OrderStatusRepository {
  protected VxEntity: Newable<OrderStatus> = OrderStatus;
}
