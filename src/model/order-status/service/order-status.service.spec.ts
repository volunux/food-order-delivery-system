import { Test, TestingModule } from '@nestjs/testing';
import { OrderStatusServiceImpl } from './order-status.service.impl';

describe('OrderStatusServiceImpl', () => {
  let service: OrderStatusServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderStatusServiceImpl],
    }).compile();

    service = module.get<OrderStatusServiceImpl>(OrderStatusServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
