import { Injectable, Inject } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from '../entities/customer.entity';
import { CustomerRepositoryImpl } from '../repository/customer.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class CustomerServiceImpl extends AbstractBaseServiceImpl<Customer> implements CustomerService {

  @Inject()
  protected repository: CustomerRepositoryImpl;
}
