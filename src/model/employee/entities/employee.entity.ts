import { Entity, Column } from 'typeorm';
import { User } from '../../abstract/User';

@Entity('employee')
export class Employee extends User {
  
}
