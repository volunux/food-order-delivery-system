import { Column, Entity, JoinColumn, JoinTable, OneToOne, ManyToMany } from 'typeorm';
import { FmEntity } from './FmEntity';
import { UserStatus } from '../user-status/entities/user-status.entity';
import { Role } from '../role/entities/role.entity';

export class User extends FmEntity {

  constructor(data: any) {
    super(data);
    if (data) {
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.middle_name = data.middle_name;
      this.phone_number = data.phone_number;
      this.email_address = data.email_address;
      this.username = data.username;
      this.hash = data.hash;
      this.salt = data.salt;
      this.status = data.status;
    }
  }

 @Column({
   'nullable': false,
   'unique': false,
   'length': 20
 })
 private first_name: string;
 
 @Column({
   'nullable': false,
   'unique': false,
   'length': 20
 })
 private last_name: string;
 
  @Column({
   'nullable': false,
   'unique': false,
   'length': 20
 })
 private middle_name: string;
 
 @Column({
   'nullable': false,
   'unique': false,
   'length': 15
 })
 private phone_number: string;
 
 @Column({
   'nullable': false,
   'unique': false,
   'length': 50
 })
 private email_address: string;
 
 @Column({
   'nullable': false,
   'unique': false,
   'length': 20
 })
 private username: string;

 @Column({
   'nullable': false,
   'unique': false,
   'type': 'text'
 })
 private hash: string;
 
 @Column({
   'nullable': false,
   'unique': false,
   'type': 'text'
 })
 private salt: string;

  @OneToOne('UserStatus', {
    'nullable': true,
    'eager': false,
    'onDelete': 'SET NULL'
  })
  @JoinColumn({
    'referencedColumnName': '_id',
    'name': 'status_id'
  })
 private status: UserStatus;

  @ManyToMany(() => Role)
  @JoinTable({
    'name': 'user_role',
    'joinColumn': {
      'name': 'user_id',
      'referencedColumnName': '_id'
    },
    'inverseJoinColumn': {
      'name': 'role_id',
      'referencedColumnName': '_id'
    }
  })
  private roles: Role[];

  private role_ids: number[];

  public getFirstName(): string {
   return this.first_name;
 }

  public setFirstName(first_name: string): void {
   this.first_name = first_name;
 }

  public getLastName(): string {
   return this.last_name;
 }

  public setLastName(last_name: string): void {
   this.last_name = last_name;
 }

  public getMiddleName(): string {
   return this.middle_name;
 }

  public setMiddleName(middle_name: string): void {
   this.middle_name = middle_name;
 }

 public getPhoneNumber(): string {
   return this.phone_number;
 }

  public setPhoneNumber(phone_number: string): void {
   this.phone_number = phone_number;
 }

  public getEmailAddress(): string {
   return this.email_address;
 }

  public setEmailAddress(email_address): void {
   this.email_address = email_address;
 }

  public getUsername(): string {
    return this.username;
 }

  public setUsername(username: string): void {
   this.username = username;
 }

  public getStatus(): UserStatus {
     return this.status;
 }

  public setStatus(status: UserStatus): void {
   this.status = status;
 }

  public getHash(): string {
   return this.hash;
 }

  public setHash(hash: string): void {
   this.hash = hash;
 }

  public getSalt(): string {
   return this.salt;
 }

  public setSalt(salt: string): void {
   this.salt = salt;
 }

  public getRoles(): Role[] {
    return this.roles;
  }

  public setRoles(roles: Role[]): void {
    this.roles = roles;
  }

  public getRoleIds(): number[] {
    return this.role_ids;
  }

  public setRoleIds(role_ids: number[]): void {
    this.role_ids = role_ids;
  }



 /** Role base can be admin, chef, vendor, agent **/
}
