import { map, filter, find, reduce } from '../index.js';

describe('map', () => {
  it('takes an array and a callback function and creates a new array with the callback function implemented', () => {
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

describe('find', () => {
  it('takes an array and a callback fucntion and returns the index of the found item', () => {
    const names = ['Angel', 'Missael', 'Maria'];
    const modification = item => item[0].toLowerCase() === 'm';
    const expected = 1;
    const actual = find(names, modification);

    expect(expected).toEqual(actual);
  });
});

describe('reduce', () => {
  it('takes an array and a callback function and optional value for the intial value of the callback functions accumulator', () => {
    const numbers = [1, 2, 3];
    const modification = (acc, item) => acc += item;
    const expected = 6;
    const actual = reduce(numbers, modification);

    expect(actual).toEqual(expected);
  });
});


