import { map, filter } from '../index.js';

describe('map', () => {
  it('replaces .map with a .length function', () => {
    const numbers = [1, 2, 3, 4, 5];
    const modification = (item) => item * 2;
    const actual = map(numbers, modification);

    expect(actual).toEqual([2, 4, 6, 8, 10]);
    expect(numbers).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('filter', () => {
  it('takes an array and callback of signature and creates a new array with all items whose callback returned true', () => {
    const numbers = [1, 2, 3, 4, 5];
    const modification = (item) => item > 3;
    const expected = [4, 5];
    const actual = filter(numbers, modification);

    expect(expected).toEqual(actual);
  });
});
