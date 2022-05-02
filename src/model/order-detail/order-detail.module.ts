import { Module } from '@nestjs/common';
import { OrderDetailServiceImpl } from './service/order-detail.service.impl';
import { OrderDetailRepositoryImpl } from './repository/order-detail.repository.impl';
import { OrderDetailController } from './order-detail.controller';

@Module({
  controllers: [OrderDetailController],
  providers: [OrderDetailServiceImpl, OrderDetailRepositoryImpl]
})
export class OrderDetailModule {}
