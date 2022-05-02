import { Injectable } from '@nestjs/common';
import { Payment } from '../entities/payment.entity';
import { CreatePaymentDto } from '../dto/create-payment.dto';
import { UpdatePaymentDto } from '../dto/update-payment.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface PaymentService extends CrudXService<Payment> {

}
