import { Module } from '@nestjs/common';
import { CustomerServiceImpl } from './service/customer.service.impl';
import { CustomerRepositoryImpl } from './repository/customer.repository.impl';
import { CustomerController } from './customer.controller';

@Module({
  controllers: [CustomerController],
  providers: [CustomerServiceImpl, CustomerRepositoryImpl]
})
export class CustomerModule {}
