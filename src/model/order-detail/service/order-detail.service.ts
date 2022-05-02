import { Injectable } from '@nestjs/common';
import { OrderDetail } from '../entities/order-detail.entity';
import { CreateOrderDetailDto } from '../dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from '../dto/update-order-detail.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface OrderDetailService extends CrudXService<OrderDetail> {

}
