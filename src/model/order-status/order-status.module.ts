import { Module } from '@nestjs/common';
import { OrderStatusServiceImpl } from './service/order-status.service.impl';
import { OrderStatusRepositoryImpl } from './repository/order-status.repository.impl';
import { OrderStatusController } from './order-status.controller';

@Module({
  controllers: [OrderStatusController],
  providers: [OrderStatusServiceImpl, OrderStatusRepositoryImpl]
})
export class OrderStatusModule {}
