import { Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import { CrudXRepository } from '../../../repository/abstract/crud-x.repository';

export interface EmployeeRepository extends CrudXRepository<Employee> {

}
