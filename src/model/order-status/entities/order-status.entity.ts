import { Column, Entity } from 'typeorm';
import { FxStatus } from '../../abstract/FxStatus';


@Entity('order_status')
export class OrderStatus extends FxStatus {

  constructor(data?: any) {
    super(data);
    if (data) {

    }
  }

}
