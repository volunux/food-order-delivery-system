import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn, RelationId, BeforeInsert } from 'typeorm';
import { Order } from '../../order/entities/order.entity';
import { Menu } from '../../menu/entities/menu.entity';

@Entity('order_detail')
export class OrderDetail {

  @PrimaryGeneratedColumn()
  private _id: number;

  @Column({
    'type': 'int',
    'nullable': false,
  })
  public quantity: number;

  public title?: string;

  @Column()
  public amount: number;

  @Column()
  public unit_price: number;

  @ManyToOne(() => Menu, {
    'nullable': true,
    'onDelete': 'SET NULL',
    'onUpdate': 'CASCADE'
  })
  @JoinColumn({
    'name': 'item_id'
  })
  public item: Menu;

  @Column({
    'nullable': true
  })
  @RelationId((self: OrderDetail) => self.item)
  public item_id: number;

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
  @RelationId((self: OrderDetail) => self.order)
  public order_id: number;

  constructor(item_id: number, title: string, unit_price: number, order_id: number) {
    this.item_id = item_id;
    this.title = title;
    this.quantity = 0;
    this.amount = 0;
    this.unit_price = unit_price;
    this.order_id = order_id;
  }

  public getId(): number {
    return this._id;
  }

  public setId(id: number): void {
    this._id = id;
  }

  public getItemId(): number {
    return +this.item_id;
  }

  public setItemId(item_id: number): void {
    this.item_id = item_id;
  }

  public getItem(): Menu {
    return this.item;
  }

  public setItem(menu: Menu): void {
    this.item = menu;
  }

  public getQuantity(): number {
    return +this.quantity;
  }

  public getAmount(): number {
    return this.unit_price * this.quantity;
  }

  public setAmount(amount: number): void {
    this.amount = amount;
  }

  public getUnitPrice(): number {
    return this.unit_price;
  }

  public setUnitPrice(unit_price: string): void {
    this.unit_price = +(unit_price);
  }

  public setQuantity(quantity: number): void {
    quantity = isNaN(quantity) ? 0 : quantity;
    if (quantity > 0) { this.quantity += quantity; }
    else if (quantity <= 0) { this.quantity = 0; }
  }

  public setQty(quantity: number): void {
    this.quantity = quantity;
  }

  public getOrderId(): number {
    return this.order_id;
  }

  public setOrderId(order_id: number): void {
    this.order_id = order_id;
  }

  public getOrder(): Order {
    return this.order;
  }

  public setOrder(order: Order): void {
    this.order = order;
  }

  public getTitle(): string {
    return <string>this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  get totalAmount(): number {
    return this.unit_price * this.quantity;
  }

  @BeforeInsert()
  public deleteTransientProps() {
    delete this.title;
  }

}