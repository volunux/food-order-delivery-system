import { Entity, Column } from 'typeorm';
import { FmEntity } from '../../abstract/FmEntity';

@Entity('menu_category')
export class MenuCategory extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.title = data.title;
      this.description = data.description;
    }
  }

  @Column({
   'nullable': false,
   'unique': false,
   'length': 50
  })
  private title: string;

  @Column({
   'nullable': true,
   'unique': false,
   'length': 300,
   'default': 'Not Available',
   'comment' : 'Brief summary of the menu type'
  })
  private description: string;

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }

}
