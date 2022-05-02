import { SelectQueryBuilder , Like } from 'typeorm';
import { AbstractStatusEntitySearch } from './abstract/AbstractStatusEntitySearch';
import { EntityQueryConfig } from '../query/EntityQueryConfig';
import { User } from '../../model/abstract/User';

export class UserSearch extends AbstractStatusEntitySearch<any> {

  public static getInstance() : UserSearch { return new UserSearch(); }

  public emailAddress(qb : SelectQueryBuilder<User> , eqc : EntityQueryConfig) : void { let emailAddress : string = (<string>eqc.getParameter('search'));
    emailAddress = emailAddress.toLowerCase();
    qb.where({'email_address' : Like(`%${emailAddress}%`)});}
}