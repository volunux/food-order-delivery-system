import { Column, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Customer } from '../../customer/entities/customer.entity';

export class Payment {

  constructor(data?: any) {
    if (data) {
      this._id = data._id;
      this.created_on = new Date();
      this.order = data.order;
      this.order_id = data.order_id;
      this.amount = data.amount;
    }
  }

  @PrimaryGeneratedColumn()
  private _id: number;

  @Column('timestamptz', {
    'nullable': false,
    'default': () => 'CURRENT_TIMESTAMP',
  })
  private created_on?: Date;

  @ManyToOne(() => Order, {
    'nullable': false,
    'onDelete': 'CASCADE'
  })
  @JoinColumn({
    'name': 'order_id'
  })
  public order: Order;

  @Column({
    'nullable': false
  })
  @RelationId((self: Payment) => self.order)
  public order_id: number;

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
  @RelationId((self: Payment) => self.customer)
  private customer_id: number;

  @Column({
    'nullable': false,
    'type': 'float'
  })
  private amount: number;

  public getId(): number {
    return this._id
  }

  public setId(id: number): void {
    this._id = id;
  }

  public getCreatedOn(): Date {
    return this.created_on as Date;
  }

  public setCreatedOn(created_on: Date): void {
    this.created_on = created_on;
  }

  public getOrder(): Order {
    return this.order;
  }

  public setOrder(order: Order): void {
    this.order = order;
  }

  public getOrderId(): number {
    return this.order_id;
  }

  public setOrderId(order_id: number): void {
    this.order_id = order_id;
  }

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

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

}