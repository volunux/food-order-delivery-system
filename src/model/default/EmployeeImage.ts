import { Column, Entity, Index, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { Attachment } from './Attachment';
import { Employee } from '../employee/entities/employee.entity';

@Entity('employee_image')
export class EmployeeImage extends Attachment {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.employee = data.employee;
    }
  }

  @OneToOne('Employee', {
    'nullable': false,
    'eager': false,
    'onDelete': 'CASCADE'
  })
  @JoinColumn({
    'referencedColumnName': '_id',
    'name': 'employee_id'
  })
  public employee: Employee;

  @Index()
  @Column({
    'nullable': false
  })
  @RelationId((self: EmployeeImage) => self.employee)
  private employee_id: number;

  public getEmployee(): Employee {
    return this.employee;
  }

  public setEmployee(employee: Employee): void {
    this.employee = employee;
  }

  public getEmployeeId(): number {
    return this.employee_id;
  }

  public setEmployeeId(employee_id: number): void {
    this.employee_id = employee_id;
  }

}