import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentServiceImpl } from './service/payment.service.impl';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Controller('payment')
export class PaymentController {
  constructor(private readonly sevrice: PaymentServiceImpl) {

  }
}
