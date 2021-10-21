/**
 * @jest-environment jsdom
 */
import { CounterMovies } from '../Showscounter';

const TestMovies1 = ['2', '3', '4', '5', '6'];
const TestMovies2 = ['2', '3', '4', '5', '6', '7'];
const TestMovies3 = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

describe('movie counter testing', () => {
  test('first Movies', () => {
    expect(CounterMovies(TestMovies1)).toBe(5);
  });
  test('second movies', () => {
    expect(CounterMovies(TestMovies2)).toBe(6);
  });
  test('third movies', () => {
    expect(CounterMovies(TestMovies3)).toBe(9);
  });
});
