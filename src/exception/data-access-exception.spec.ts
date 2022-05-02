import { DataAccessException } from './data-access-exception';

describe('DataAccessException', () => {
  it('should be defined', () => {
    expect(new DataAccessException()).toBeDefined();
  });
});
