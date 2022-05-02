import { OrderRepository } from '../../model/order/repository/order.repository';
import { OrderService } from '../../model/order/service/order.service';
import { EntityQueryConfig } from '../../helper/query/EntityQueryConfig';
import { AbstractBaseServiceImpl } from './AbstractBaseServiceImpl';
import { Order } from '../../model/order/entities/order.entity';

export abstract class AbstractBaseOrderService extends AbstractBaseServiceImpl<Order> implements OrderService {
  protected abstract repository: OrderRepository;

}