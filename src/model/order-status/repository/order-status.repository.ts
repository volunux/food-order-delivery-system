import { Injectable } from '@nestjs/common';
import { OrderStatus } from '../entities/order-status.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface OrderStatusRepository extends CrudXRepository<OrderStatus> {

}
