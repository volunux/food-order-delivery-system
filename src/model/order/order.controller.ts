import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderServiceImpl } from './service/order.service.impl';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('order')
export class OrderController {
  constructor(private readonly sevrice: OrderServiceImpl) {

  }
}
