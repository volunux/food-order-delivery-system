import { FmEntity } from '../abstract/FmEntity';
import { Column } from 'typeorm';

export class Attachment extends FmEntity {

  constructor(data?: any) {
    super(data);
    if (data) {
      this.location = data.location;
      this.mimetype = data.mimetype;
      this.size = data.size;
      this.key = data.key;
    }
  }

  @Column({
    'nullable': false,
    'length': 200
  })
  private location: string;

  @Column({
    'nullable': true,
    'length': 25,
    'default': 'Not Available'
  })
  private mimetype: string = 'Not Available';

  @Column({
    'nullable': true,
    'length': 25,
    'default': 'Not Available'
  })
  private size: string = 'Not Available';

  @Column({
    'nullable': false,
    'length': 200
  })
  private key: string;

  public getLocation(): string {
    return this.location;
  }

  public setLocation(location: string): void {
    this.location = location;
  }

  public getMimetype(): string {
    return this.mimetype;
  }

  public setMimetype(mimetype: string): void {
    this.mimetype = mimetype;
  }

  public getSize(): string {
    return this.size;
  }

  public setSize(size: string): void {
    this.size = size;
  }

  public getKey(): string {
    return this.key;
  }

  public setKey(key: string): void {
    this.key = key;
  }
}