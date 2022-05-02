import { Test, TestingModule } from '@nestjs/testing';
import { UserStatusServiceImpl } from './user-status.service.impl';

describe('UserStatusServiceImpl', () => {
  let service: UserStatusServiceImpl;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStatusServiceImpl],
    }).compile();

    service = module.get<UserStatusServiceImpl>(UserStatusServiceImpl);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
