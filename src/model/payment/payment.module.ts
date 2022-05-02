import { Module } from '@nestjs/common';
import { PaymentServiceImpl } from './service/payment.service.impl';
import { PaymentRepositoryImpl } from './repository/payment.repository.impl';
import { PaymentController } from './payment.controller';

@Module({
  controllers: [PaymentController],
  providers: [PaymentServiceImpl, PaymentRepositoryImpl]
})
export class PaymentModule {}
