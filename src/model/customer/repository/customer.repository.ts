import { Injectable } from '@nestjs/common';
import { Customer } from '../entities/customer.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface CustomerRepository extends CrudXRepository<Customer> {

}
