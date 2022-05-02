import { Column, Entity } from 'typeorm';
import { FmEntity } from '../../abstract/FmEntity';

@Entity('vendor')
export class Vendor extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.title = data.title;
      this.description = data.description;
      this.contact_info = data.contact_info;
      this.address = data.address;
    }
  }

  @Column({
    'nullable': false,
    'length' : 150
  })
  private title: string;
  
  @Column({
    'nullable': false,
    'length': 400
  })
  private description: string;
  
  @Column({
    'nullable': false,
    'length': 300
  })
  private contact_info: string;
  
  @Column({
    'nullable': false,
    'length': 300
  })
  private address: string;

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

  public getContactInfo(): string {
    return this.contact_info;
  }

  public setContactInfo(contact_info: string): void {
    this.contact_info = contact_info;
  }

  public getAddress(): string {
    return this.address;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

}
