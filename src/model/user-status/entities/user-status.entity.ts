import { Column, Entity } from 'typeorm';
import { FxStatus } from '../../abstract/FxStatus';

@Entity('user_status')
export class UserStatus extends FxStatus {

  constructor(data?: any) {
    super(data);
    if (data) {

    }
  }

}
