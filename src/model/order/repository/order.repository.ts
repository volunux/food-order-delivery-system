import { Injectable } from '@nestjs/common';
import { Order } from '../entities/order.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface OrderRepository extends CrudXRepository<Order> {

}
