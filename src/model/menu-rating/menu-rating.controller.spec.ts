import { Test, TestingModule } from '@nestjs/testing';
import { MenuRatingController } from './menu-rating.controller';
import { MenuRatingService } from './menu-rating.service';

describe('MenuRatingController', () => {
  let controller: MenuRatingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuRatingController],
      providers: [MenuRatingService],
    }).compile();

    controller = module.get<MenuRatingController>(MenuRatingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
