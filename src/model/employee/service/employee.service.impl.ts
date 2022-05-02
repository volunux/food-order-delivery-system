import { Injectable, Inject } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from '../entities/employee.entity';
import { EmployeeRepositoryImpl } from '../repository/employee.repository.impl';
import { AbstractBaseServiceImpl } from '../../../service/abstract/AbstractBaseServiceImpl';

@Injectable()
export class EmployeeServiceImpl extends AbstractBaseServiceImpl<Employee> implements EmployeeService {

  @Inject()
  protected repository: EmployeeRepositoryImpl;
}
