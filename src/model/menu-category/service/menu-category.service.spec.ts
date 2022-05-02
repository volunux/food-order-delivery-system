import { Test, TestingModule } from '@nestjs/testing';
import { MenuCategoryServiceImpl } from './menu-category.service.impl';

describe('MenuCategoryServiceImpl', () => {
  let service: MenuCategoryServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuCategoryServiceImpl],
    }).compile();

    service = module.get<MenuCategoryServiceImpl>(MenuCategoryServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
