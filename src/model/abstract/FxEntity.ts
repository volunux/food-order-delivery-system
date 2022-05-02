import { Column, Index, JoinColumn, ManyToOne, RelationId } from 'typeorm';
import { FmEntity } from './FmEntity';
import { Customer } from '../customer/entities/customer.entity';

export class FxEntity extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.customer_id = data.customer_id;
      this.customer = data.customer;
    }
  }

  @Index()
  @ManyToOne('Customer', {
    'eager': false,
    'nullable': true,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'customer_id'
  })
  public customer: Customer;

  @Column({
    'nullable': true
  })
  @RelationId((self: FxEntity) => self.customer)
  protected customer_id?: number;

  public getCustomerId(): number {
    return this.customer_id as any;
  }

  public setCustomerId(customer_id: number): void {
    this.customer_id = customer_id;
  }

  public getCustomer(): Customer {
    return this.customer as any;
  }

  public setCustomer(customer: Customer): void {
    this.customer = customer;
  }

}