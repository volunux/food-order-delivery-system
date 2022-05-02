import { Test, TestingModule } from '@nestjs/testing';
import { PaymentServiceImpl } from './payment.service.impl';

describe('PaymentServiceImpl', () => {
  let service: PaymentServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentServiceImpl],
    }).compile();

    service = module.get<PaymentServiceImpl>(PaymentServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
