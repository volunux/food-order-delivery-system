import { Test, TestingModule } from '@nestjs/testing';
import { MenuStatusServiceImpl } from './menu-status.service.impl';

describe('MenuStatusServiceImpl', () => {
  let service: MenuStatusServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuStatusServiceImpl],
    }).compile();

    service = module.get<MenuStatusServiceImpl>(MenuStatusServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
