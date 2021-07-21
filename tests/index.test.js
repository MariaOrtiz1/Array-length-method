import { jest } from '@jest/globals';

describe('map', () => {
  it('replaces .map with a .length function', () => {
    const numbers = [1, 2, 3, 4, 5];
    const modification = (item) => item * 2;
    const actual = map(numbers, modification);

    expect(actual).toEqual([2, 4, 6, 8, 10]);
    expect(numbers).toEqual([1, 2, 3, 4, 5]);
  });
});
