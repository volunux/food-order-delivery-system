import { Injectable, Inject } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { Payment } from '../entities/payment.entity';
import { PaymentRepositoryImpl } from '../repository/payment.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class PaymentServiceImpl extends AbstractBaseServiceImpl<Payment> implements PaymentService {

  @Inject()
  protected repository: PaymentRepositoryImpl;
}
