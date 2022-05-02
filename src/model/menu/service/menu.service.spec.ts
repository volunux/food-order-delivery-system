import { Test, TestingModule } from '@nestjs/testing';
import { MenuServiceImpl } from './menu.service.impl';

describe('MenuServiceImpl', () => {
  let service: MenuServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuServiceImpl],
    }).compile();

    service = module.get<MenuServiceImpl>(MenuServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
