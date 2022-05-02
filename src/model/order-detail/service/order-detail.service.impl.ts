import { Injectable, Inject } from '@nestjs/common';
import { OrderDetailService } from './order-detail.service';
import { OrderDetail } from '../entities/order-detail.entity';
import { OrderDetailRepositoryImpl } from '../repository/order-detail.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class OrderDetailServiceImpl extends AbstractBaseServiceImpl<OrderDetail> implements OrderDetailService {

  @Inject()
  protected repository: OrderDetailRepositoryImpl;
}
