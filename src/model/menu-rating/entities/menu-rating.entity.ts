import { Column, Entity, Index, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
import { Menu } from '../../menu/entities/menu.entity';
import { Customer } from '../../customer/entities/customer.entity';

@Entity('menu_rating')
export class MenuRating {

  constructor(data?: any) {
    if (data) {
      this._id = data._id;
      this.created_on = new Date();
      this.menu = data.menu;
      this.menu_id = data.menu_id;
      this.score = data.score;
    }
  }

  @PrimaryGeneratedColumn()
  private _id: number;

  @Column('timestamptz', {
    'nullable': false,
    'default': () => 'CURRENT_TIMESTAMP',
  })
  private created_on?: Date;

  @ManyToOne(() => Menu, {
    'nullable': false,
    'onDelete': 'CASCADE'
  })
  @JoinColumn({
    'name': 'menu_id'
  })
  public menu: Menu;

  @Column({
    'nullable': false
  })
  @RelationId((self: MenuRating) => self.menu)
  public menu_id: number;

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
  @RelationId((self: MenuRating) => self.customer)
  private customer_id: number;

  @Column({
    'nullable': false,
    'type': 'int'
  })
  private score: number;

  @Column({
    'nullable': false,
    'length' : 300
  })
  private remark: string;

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

  public getMenu(): Menu {
    return this.menu;
  }

  public setMenu(menu: Menu): void {
    this.menu = menu;
  }

  public getMenuId(): number {
    return this.menu_id;
  }

  public setMenuId(menu_id: number): void {
    this.menu_id = menu_id;
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
    return this.score;
  }

  public setAmount(score: number): void {
    this.score = score;
  }

  public getRemark(): string {
    return this.remark;
  }

  public setRemark(remark: string): void {
    this.remark = remark;
  }

}