import { Entity, Column, OneToOne } from 'typeorm';
import { User } from '../../abstract/User';
import { CustomerImage } from '../../default/CustomerImage';


@Entity('customer')
export class Customer extends User {
  
  @OneToOne(() => CustomerImage, image => image.customer, {
    'nullable': true,
    'eager': false
  })
  private image: CustomerImage;
}
