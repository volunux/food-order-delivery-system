import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CustomerServiceImpl } from './service/customer.service.impl';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private readonly sevrice: CustomerServiceImpl) {

  }
}
