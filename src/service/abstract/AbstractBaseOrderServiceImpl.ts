import { OrderRepository } from '../../model/order/repository/order.repository';
import { OrderService } from '../../model/order/service/order.service';
import { Order } from '../../model/order/entities/order.entity';
import { EntityQueryConfig } from '../../helper/query/EntityQueryConfig';
import { AbstractBaseServiceImpl } from './AbstractBaseServiceImpl';

export abstract class AbstractBaseOrderServiceImpl extends AbstractBaseServiceImpl<Order> implements OrderService {
  protected abstract repository: OrderRepository;

}