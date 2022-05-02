import { getRepository, SelectQueryBuilder, UpdateResult, Like } from 'typeorm';
import { AbstractBaseRepositoryImpl } from './AbstractBaseRepositoryImpl';
import { OrderOrmSearch } from '../../helper/search/OrderOrmSearch';
import { EntityQueryConfig } from '../../helper/query/EntityQueryConfig';
import { Newable } from '../../model/interface/Newable';
import { OrderRepository } from '../../model/order/repository/order.repository';
import { Order } from '../../model/order/entities/order.entity';
import { OrderDetail } from '../../model/order-detail/entities/order-detail.entity';
import { Customer } from '../../model/customer/entities/customer.entity';
import { VxRepository } from '../../decorators/VxRepository';

@VxRepository()
export class AbstractBaseOrderRepositoryImpl extends AbstractBaseRepositoryImpl<Order> implements OrderRepository {

  protected readonly search: OrderOrmSearch = OrderOrmSearch.getInstance();
  protected readonly VxEntity: Newable<Order> = Order;

  public async getOwnerOfOrder(reference: string): Promise<Customer | null> {
    return null;
  }

  public async findOne(id: string | number, userId?: number): Promise<Order | null> {
    return null;
  }

  protected async findOneInternal(id: string | number, userId?: number): Promise<SelectQueryBuilder<Order>> {
    return null;
  }

  public async findOrderDetails(id: number): Promise<OrderDetail[]> {
    return [];
  }

  public async findNonComplete(q: EntityQueryConfig): Promise<Order[]> {
    return [];
  }

  protected async findAllInternal(q: EntityQueryConfig, userId?: number): Promise<SelectQueryBuilder<Order>> {
    return null;
  }

  public async findAll(q: EntityQueryConfig): Promise<Order[]> {
    return [];
  }

  public async update(id: string, entry: Order): Promise<Order | null> {
    return null;
  }

  public async updateOne(id: string | number, userId?: number): Promise<Order | null> {
    return null;
  }

  public async deleteOne(id: string | number, userId?: number): Promise<Order | null> {
    return null;
  }

}