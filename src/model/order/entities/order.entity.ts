import { Column, Entity, JoinColumn, ManyToOne, OneToOne, RelationId } from 'typeorm';
import { FmEntity } from '../../abstract/FmEntity';
import { Customer } from '../../customer/entities/customer.entity';
import { Employee } from '../../employee/entities/employee.entity';
import { OrderStatus } from '../../order-status/entities/order-status.entity';
import { Vendor } from '../../vendor/entities/vendor.entity';


export class Order extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.customer = data.customer;
      this.customer_id = data.customer_id;
      this.status = data.status;
      this.status_id = data.status_id;
      this.handler = data.handler;
      this.handler_id = data.handler_id;
      this.amount = data.amount;
      this.estimated_delivery_time = data.estimated_delivery_time;
      this.delivery_time = data.delivery_time;
      this.vendor = data.vendor;
      this.vendor_id = data.vendor_id;
      this.delivery_address = data.delivery_address;
      this.comment = data.comment;
      this.order_date = new Date();
    }
  }

  @ManyToOne('Customer', {
    'nullable': true,
    'eager': false,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'customer_id'
  })
  private customer: Customer;

  @Column({
    'nullable': true
  })
  @RelationId((self: Order) => self.customer)
  public customer_id: number;

  @Column('timestamptz', {
    'nullable': false,
    'default': () => 'CURRENT_TIMESTAMP',
  })
  private order_date: Date;

  @Column('double', {
    'nullable': false,
    'unique': false
  })
  private amount: number;

  @ManyToOne('OrderStatus', {
    'nullable': true,
    'eager': false,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'status_id'
  })
  private status: OrderStatus;
 
  @Column({
    'nullable': true
  })
  @RelationId((self: Order) => self.status)
  public status_id: number;

  @ManyToOne('Employee', {
    'nullable': true,
    'eager': false,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'handler_id'
  })
  private handler: Employee;

  @Column({
    'nullable': true
  })
  @RelationId((self: Order) => self.handler)
  public handler_id: number;

  @Column('timestamptz', {
    'nullable': false,
    'default': 'CURRENT_TIMESTAMP'
  })
  private estimated_delivery_time;

  @Column('timestamptz', {
    'nullable': true,
    'default': 'CURRENT_TIMESTAMP'
  })
  private delivery_time;

  @Column({
    'nullable': false,
    'length': 300
  })
  private delivery_address: string;

  @ManyToOne('Vendor', {
    'nullable': true,
    'eager': false,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'name': 'vendor_id'
  })
  private vendor: Vendor;

  @Column({
    'nullable': true
  })
  @RelationId((self: Order) => self.vendor)
  public vendor_id: number;

  @Column({
    'nullable': true,
    'length': 500,
    'default': 'Not Available'
  })
  private comment: string;

  public getCustomer(): Customer {
    return this.customer;
  }

  public setCustomer(customer: Customer): void {
    this.customer = customer;
  }

  public getOrderDate(): Date {
    return this.order_date;
  }

  public setOrderDate(order_date: Date): void {
    this.order_date = order_date;
  }

  public getAmount(): number {
    return this.amount;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public getStatus(): OrderStatus {
    return this.status;
  }

  public setStatus(status: OrderStatus): void {
    this.status = status;
  }

  public getHandler(): Employee {
    return this.handler;
  }

  public setHandler(handler: Employee): void {
    this.handler = handler;
  }

  public getCustomerId(): number {
    return this.customer_id;
  }

  public setCustomerId(customer_id: number): void {
    this.customer_id = customer_id;
  }

  public getStatusId(): number {
    return this.status_id;
  }

  public setStatusId(status_id: number): void {
    this.status_id = status_id;
  }

  public getHandlerId(): number {
    return this.handler_id;
  }

  public setHandlerId(handler_id: number): void {
    this.handler_id = handler_id;
  }

  public getEstimatedDeliveryTime(): Date {
    return this.estimated_delivery_time;
  }

  public setEstimatedDeliveryTime(estimated_delivery_time: Date): void {
    this.estimated_delivery_time;
  }

  public getDeliveryTime(): Date {
    return this.delivery_time;
  }

  public setDeliveryTime(delivery_time: Date): void {
    this.delivery_time = delivery_time;
  }

  public getVendor(): Vendor {
    return this.vendor;
  }

  public setVendor(vendor: Vendor): void {
    this.vendor = vendor;
  }

  public getVendorId(): number {
    return this.vendor_id;
  }

  public setVendorId(vendor_id: number): void {
    this.vendor_id = vendor_id;
  }

  public getDeliveryAddress(): string {
    return this.delivery_address;
  }

  public setDeliveryAddress(delivery_address: string): void {
    this.delivery_address = delivery_address;
  }

  public getComment(): string {
    return this.comment;
  }

  public setComment(comment: string): void {
    this.comment = comment;
  }

}
