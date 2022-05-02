import { SelectQueryBuilder, In } from 'typeorm';
import { EntityQueryConfig } from '../../query/EntityQueryConfig';
import { AbstractBaseEntitySearch } from './AbstractBaseEntitySearch'

export abstract class AbstractStatusEntitySearch<T> extends AbstractBaseEntitySearch<T> {

  public status(qb: SelectQueryBuilder<T>, eqc: EntityQueryConfig): void {
    let status: string | string[] = (<string>eqc.getParameter('search'));
    if ((!Array.isArray(status)) && status.trim() === "") { }
    else if (Array.isArray(status)) { status = status.map((s: string) => { return '\'' + s[0].toUpperCase() + s.slice(1).toLowerCase() + '\''; }).join(' , '); }
    else { status = '\'' + status + '\''; }
    qb.andWhere(`st.name IN (${status})`);
  }
}