import QueryClient from '../../helper/query/QueryClient';
import { EntityQueryConfig } from '../../helper/query/EntityQueryConfig';
import { EntityManager } from 'typeorm';

export interface CrudRepository<T> {

  findAll(eqp: EntityQueryConfig | null, userId?: number): Promise<T[]>;
  findOne(id: string | number, userId?: number): Promise<T | null>;
  save(entry: T): Promise<T | null>;
  insert(entry: T): Promise<boolean>;
  persist(entry: T): Promise<T | null>;
  remove(id: string | number, userId?: number): Promise<T | null>;
  update(id: string | number, entry: T, userId?: number): Promise<T | null>;
  existsOne(id: string | number): Promise<boolean>;
  getClient(): QueryClient;
  getTransactionManager(): EntityManager | null;
  setTransactionManager(manager: EntityManager | null): void;
}