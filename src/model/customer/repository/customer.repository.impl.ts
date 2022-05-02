import { Injectable } from '@nestjs/common';
import { CustomerRepository } from './customer.repository';
import { Customer } from '../entities/customer.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class CustomerRepositoryImpl extends AbstractBaseRepositoryImpl<Customer> implements CustomerRepository {
  protected VxEntity: Newable<Customer> = Customer;
}
