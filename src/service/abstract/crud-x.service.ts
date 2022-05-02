import { CrudService } from './crud.service';

export interface CrudXService<T extends Object> extends CrudService<T> {

  deleteMany(entries: string | string[] | number | number[]): Promise<T[]>;
  deleteAll(): Promise<T[]>;
  updateOne(id: string | number, userId?: number): Promise<T | null>;
  addOne(): Promise<T>;
  deleteOne(id: string | number, userId?: number): Promise<T | null>;
  findAndDeleteAll(): Promise<T[]>;
}