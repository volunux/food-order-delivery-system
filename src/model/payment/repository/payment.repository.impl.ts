import { Injectable } from '@nestjs/common';
import { PaymentRepository } from './payment.repository';
import { Payment } from '../entities/payment.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class PaymentRepositoryImpl extends AbstractBaseRepositoryImpl<Payment> implements PaymentRepository {
  protected VxEntity: Newable<Payment> = Payment;
}
