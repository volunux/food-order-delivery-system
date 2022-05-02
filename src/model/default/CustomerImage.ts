import { Column, Entity, Index, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { Attachment } from './Attachment';
import { Customer } from '../customer/entities/customer.entity';

@Entity('customer_image')
export class CustomerImage extends Attachment {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.customer = data.customer;
      this.customer_id = data.customer_id;
    }
  }

  @OneToOne('Customer', {
    'nullable': false,
    'eager': false,
    'onDelete': 'CASCADE'
  })
  @JoinColumn({
    'referencedColumnName': '_id',
    'name': 'customer_id'
  })
  public customer: Customer;

  @Index()
  @Column({
    'nullable': false
  })
  @RelationId((self: CustomerImage) => self.customer)
  private customer_id: number;

  public getCustomer(): Customer {
    return this.customer;
  }

  public setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  public getCustomerId(): number {
    return this.customer_id;
  }

  public setCustomerId(customer_id: number): void {
    this.customer_id = customer_id;
  }

}