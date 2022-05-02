import { EnvironmentPropertyNotFoundException } from './environment-property-not-found-exception';

describe('EnvironmentPropertyNotFoundException', () => {
  it('should be defined', () => {
    expect(new EnvironmentPropertyNotFoundException()).toBeDefined();
  });
});
