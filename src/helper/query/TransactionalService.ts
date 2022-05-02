import { CrudRepository } from '../../repository/abstract/crud.repository';

export interface TransactionalService {
  get<S>(context : S) : Promise<S>;
}