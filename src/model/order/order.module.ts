import { Module } from '@nestjs/common';
import { OrderServiceImpl } from './service/order.service.impl';
import { OrderRepositoryImpl } from './repository/order.repository.impl';
import { OrderController } from './order.controller';

@Module({
  controllers: [OrderController],
  providers: [OrderServiceImpl, OrderRepositoryImpl]
})
export class OrderModule {}
