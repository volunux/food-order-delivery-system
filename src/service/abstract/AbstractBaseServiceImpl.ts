import { EntityQueryConfig } from '../../helper/query/EntityQueryConfig';
import { CrudRepository } from '../../repository/abstract/crud.repository';
import { CrudXRepository } from '../../repository/abstract/crud-x.repository';
import { CrudXService } from '../abstract/crud-x.service';
import { TransactionalServiceImpl } from '../../helper/query/TransactionalServiceImpl';
import { TransactionalService } from '../../helper/query/TransactionalService';

export abstract class AbstractBaseServiceImpl<T> implements CrudXService<T> {

  protected abstract repository: CrudXRepository<T>;
  protected transactionalService: TransactionalService = new TransactionalServiceImpl();

  public async findOne(id: string): Promise<T | null> { return this.repository.findOne(id); }

  public async existsOne(id: string): Promise<boolean> { return this.repository.existsOne(id); }

  public async findAll(eqp: EntityQueryConfig, userId?: number): Promise<T[]> { return this.repository.findAll(eqp, userId); }
  
  public async addOne(): Promise<T> { return this.repository.addOne(); }
  
  public async save(entry: T): Promise<T | null> { return this.repository.save(entry); }
  
  public async insert(entry: T): Promise<boolean> { return this.repository.insert(entry); }
  
  public async updateOne(id: string, userId?: number): Promise<T | null> { return this.repository.updateOne(id, userId); }
  
  public async update(id: string, entry: T, userId: number): Promise<T | null> {return this.repository.update(id, entry, userId); }
  
  public async deleteOne(id: string): Promise<T | null> { return this.repository.deleteOne(id); }
  
  public async remove(id: string): Promise<T | null> { return this.repository.remove(id); }
  
  public async deleteMany(entries: string): Promise<T[]> { return this.repository.deleteMany(entries); }
  
  public async deleteAll(): Promise<T[]> { return this.repository.deleteAll(); }
  
  public async findAndDeleteAll(): Promise<T[]> { return this.repository.findAndDeleteAll(); }
  
  public getRepository(): CrudRepository<T> { return this.repository; }

}