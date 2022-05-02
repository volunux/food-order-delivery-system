import { Column, Entity } from 'typeorm';
import { FxStatus } from '../../abstract/FxStatus';

@Entity('menu_status')
export class MenuStatus extends FxStatus {

  constructor(data?: any) {
    super(data);
    if (data) {

    }
  }

}
