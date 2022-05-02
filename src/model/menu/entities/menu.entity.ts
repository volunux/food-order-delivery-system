import { Entity, Column, Index, ManyToOne, OneToOne, JoinColumn, RelationId } from 'typeorm';
import { FmEntity } from '../../abstract/FmEntity';
import { MenuCategory } from '../../menu-category/entities/menu-category.entity';
import { MenuStatus } from '../../menu-status/entities/menu-status.entity';
import { MenuImage } from '../../default/menu-image/menu-image.entity';

export class Menu extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.title = data.title;
      this.price = data.price;
      this.ingredient = data.ingredient;
      this.image = data.image;
      this.category = data.category;
      this.status = data.status;
      this.category_id = data.category_id;
      this.status_id = data.status_id;
    }
  }

   @Column({
   'nullable': false,
   'unique': false,
   'length': 100
 })
  private title: string;

   @Column({
   'nullable': false,
   'unique': false,
   'type': 'float',
   'length': 6
 })
  private price: number;
  
  @Column({
   'nullable': false,
   'unique': false,
   'length': 300,
  })
  private ingredient: string;

  @OneToOne(() => MenuImage, image => image.menu, {
    'nullable': true,
    'eager': false
  })
  private image: MenuImage;

  @ManyToOne('MenuCategory', {
    'nullable': true,
    'onDelete': 'SET NULL',
    'onUpdate': 'CASCADE'
  })
  @JoinColumn({
    'name': 'category_id'
  })
  private category: MenuCategory;

  @Column({
    'nullable': true
  })
  @RelationId((self: Menu) => self.category)
  public category_id: number;

  @ManyToOne('MenuStatus', {
    'nullable': true,
    'onDelete': 'SET NULL',
    'onUpdate': 'CASCADE',    
  })
  @JoinColumn({
    'name': 'status_id'
  })
  private status: MenuStatus;

  @Column({
    'nullable': true,
    'comment': 'Use to indicate the available of the menu, which can be unavailable or available'
  })
  @RelationId((self: Menu) => self.status)
  public status_id: number;


  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public getIngredient(): string {
    return this.ingredient;
  }

  public setIngredient(ingredient: string): void {
    this.ingredient = ingredient;
  }

  public getImage(): MenuImage {
    return this.image;
  }

  public setImage(image: MenuImage): void {
    this.image = image;
  }

  public getCategory(): MenuCategory {
    return this.category;
  }

  public setCategory(category: MenuCategory): void {
    this.category = category;
  }

  public getStatus(): MenuStatus {
    return this.status;
  }

  public setStatus(status: MenuStatus): void {
    this.status = status;
  }

  public getCategoryId(): number {
    return this.category_id;
  }

  public setCategoryId(category_id: number): void {
    this.category_id = category_id;
  }

  public getStatusId(): number {
    return this.status_id;
  }

  public setStatusId(status_id: number): void {
    this.status_id = status_id;
  }
}
