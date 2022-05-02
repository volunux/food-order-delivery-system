import { Injectable, Inject } from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import { OrderStatus } from '../entities/order-status.entity';
import { OrderStatusRepositoryImpl } from '../repository/order-status.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class OrderStatusServiceImpl extends AbstractBaseServiceImpl<OrderStatus> implements OrderStatusService {

  @Inject()
  protected repository: OrderStatusRepositoryImpl;
}
