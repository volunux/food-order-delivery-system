import { Injectable } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';
import { CrudXService } from '../../../service/abstract/crud-x.service';

export interface EmployeeService extends CrudXService<Employee> {

}
