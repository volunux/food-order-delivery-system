import { Test, TestingModule } from '@nestjs/testing';
import { OrderServiceImpl } from './order.service.impl';

describe('OrderServiceImpl', () => {
  let service: OrderServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderServiceImpl],
    }).compile();

    service = module.get<OrderServiceImpl>(OrderServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
