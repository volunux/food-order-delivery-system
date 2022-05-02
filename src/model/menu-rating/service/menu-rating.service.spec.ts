import { Test, TestingModule } from '@nestjs/testing';
import { MenuRatingServiceImpl } from './menu-rating.service.impl';

describe('MenuRatingServiceImpl', () => {
  let service: MenuRatingServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenuRatingServiceImpl],
    }).compile();

    service = module.get<MenuRatingServiceImpl>(MenuRatingServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
