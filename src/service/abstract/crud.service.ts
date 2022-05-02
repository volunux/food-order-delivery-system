import { EntityQueryConfig } from '../../helper/query/EntityQueryConfig';
import { CrudRepository } from '../../repository/abstract/crud.repository';

export interface CrudService<T> {

  findAll(eqp: EntityQueryConfig | null, userId?: number): Promise<T[]>;
  findOne(id: string | number, userId?: number): Promise<T | null>;
  save(entry: T): Promise<T | null>;
  insert(entry: T): Promise<boolean>;
  update(id: string | number, entry: T, userId?: number): Promise<T | null>;
  remove(id: string | number, userId?: number): Promise<T | null>;
  existsOne(id: string | number): Promise<boolean>;
  getRepository(): CrudRepository<T>;
}