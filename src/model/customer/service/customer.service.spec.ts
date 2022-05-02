import { Test, TestingModule } from '@nestjs/testing';
import { CustomerServiceImpl } from './customer.service.impl';

describe('CustomerServiceImpl', () => {
  let service: CustomerServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerServiceImpl],
    }).compile();

    service = module.get<CustomerServiceImpl>(CustomerServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
