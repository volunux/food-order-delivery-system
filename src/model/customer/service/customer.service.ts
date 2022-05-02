import { Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface CustomerService extends CrudXService<Customer> {

}
