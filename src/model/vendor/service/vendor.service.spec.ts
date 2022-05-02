import { Test, TestingModule } from '@nestjs/testing';
import { VendorServiceImpl } from './vendor.service.impl';

describe('VendorServiceImpl', () => {
  let service: VendorServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VendorServiceImpl],
    }).compile();

    service = module.get<VendorServiceImpl>(VendorServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
