import { Injectable, Inject } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from '../entities/order.entity';
import { OrderRepositoryImpl } from '../repository/order.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class OrderServiceImpl extends AbstractBaseServiceImpl<Order> implements OrderService {

  @Inject()
  protected repository: OrderRepositoryImpl;
}
