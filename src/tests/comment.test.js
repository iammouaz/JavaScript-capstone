/**
 * @jest-environment jsdom
 */
import { getCounter } from '../commenthundler';

const array1 = ['test', 'Moaz', 'Marcos', '123'];
const array2 = ['test', 'Moaz', 'Marcos', '123', '12345', '123456', '1234567', '12345678'];
const array3 = ['123', '1'];
const array4 = [];

describe('Comment Counter testing', () => {
  test('First Case', () => {
    expect(getCounter(array1)).toBe(4);
  });
  test('Second Case', () => {
    expect(getCounter(array2)).toBe(8);
  });
  test('Third Case', () => {
    expect(getCounter(array3)).toBe(2);
  });
  test('Final Case', () => {
    expect(getCounter(array4)).toBe(0);
  });
});