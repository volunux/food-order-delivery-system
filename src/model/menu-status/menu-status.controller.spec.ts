import { Test, TestingModule } from '@nestjs/testing';
import { MenuStatusController } from './menu-status.controller';
import { MenuStatusService } from './menu-status.service';

describe('MenuStatusController', () => {
  let controller: MenuStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuStatusController],
      providers: [MenuStatusService],
    }).compile();

    controller = module.get<MenuStatusController>(MenuStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
