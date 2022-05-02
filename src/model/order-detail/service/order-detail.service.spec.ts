import { Test, TestingModule } from '@nestjs/testing';
import { OrderDetailServiceImpl } from './order-detail.service.impl';

describe('OrderDetailServiceImpl', () => {
  let service: OrderDetailServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderDetailServiceImpl],
    }).compile();

    service = module.get<OrderDetailServiceImpl>(OrderDetailServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
