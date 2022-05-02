import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './employee.repository';
import { Employee } from '../entities/employee.entity';
import { Newable } from '../../interface/Newable';
import { AbstractBaseRepositoryImpl } from '../../../repository/abstract/AbstractBaseRepositoryImpl';

@Injectable()
export class EmployeeRepositoryImpl extends AbstractBaseRepositoryImpl<Employee> implements EmployeeRepository {
  protected VxEntity: Newable<Employee> = Employee;
}
