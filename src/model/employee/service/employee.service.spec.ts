import { Test, TestingModule } from '@nestjs/testing';
import { EmployeeServiceImpl } from './employee.service.impl';

describe('EmployeeServiceImpl', () => {
  let service: EmployeeServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeeServiceImpl],
    }).compile();

    service = module.get<EmployeeServiceImpl>(EmployeeServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
