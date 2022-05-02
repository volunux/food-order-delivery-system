import { Injectable } from '@nestjs/common';
import { Payment } from '../entities/payment.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface PaymentRepository extends CrudXRepository<Payment> {

}
