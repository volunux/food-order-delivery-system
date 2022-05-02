import { CrudRepository } from '../../repository/abstract/crud.repository';
import Query from './Query';

export default interface QueryClient extends Query {

  beginTransaction(facade: CrudRepository<any>[], context?: any): Promise<void>;
  endTransaction(facade?: CrudRepository<any>): Promise<void>;
  commit(facade?: CrudRepository<any>): Promise<void>;
  rollback(facade?: CrudRepository<any>): Promise<void>;
}