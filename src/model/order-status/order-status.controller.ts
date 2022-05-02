import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderStatusServiceImpl } from './service/order-status.service.impl';
import { CreateOrderStatusDto } from './dto/create-order-status.dto';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Controller('order-status')
export class OrderStatusController {
  constructor(private readonly sevrice: OrderStatusServiceImpl) {

  }
}
