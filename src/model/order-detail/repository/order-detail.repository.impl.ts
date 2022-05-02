import { Injectable } from '@nestjs/common';
import { OrderDetailRepository } from './order-detail.repository';
import { OrderDetail } from '../entities/order-detail.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class OrderDetailRepositoryImpl extends AbstractBaseRepositoryImpl<OrderDetail> implements OrderDetailRepository {
  protected VxEntity: Newable<OrderDetail> = OrderDetail;
}
