import { Column, Entity, Index, JoinColumn, OneToOne, RelationId } from 'typeorm';
import { Attachment } from '../Attachment';
import { Menu } from '../../menu/entities/menu.entity';

@Entity('menu_image')
export class MenuImage extends Attachment {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.menu = data.menu;
    }
  }

  @OneToOne('Menu', {
    'nullable': false,
    'eager': false,
    'onDelete': 'CASCADE'
  })
  @JoinColumn({
    'referencedColumnName': '_id',
    'name': 'menu_id'
  })
  public menu: Menu;

  @Index()
  @Column({
    'nullable': false
  })
  @RelationId((self: MenuImage) => self.menu)
  private menu_id: number;

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

}