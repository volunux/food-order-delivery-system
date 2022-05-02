import { Injectable } from '@nestjs/common';
import { OrderDetail } from '../entities/order-detail.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface OrderDetailRepository extends CrudXRepository<OrderDetail> {

}
