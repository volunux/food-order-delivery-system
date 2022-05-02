import { Module } from '@nestjs/common';
import { EmployeeServiceImpl } from './service/employee.service.impl';
import { EmployeeRepositoryImpl } from './repository/employee.repository.impl';
import { EmployeeController } from './employee.controller';

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeServiceImpl, EmployeeRepositoryImpl]
})
export class EmployeeModule {}
