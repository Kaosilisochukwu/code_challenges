const optimalDivision = require('../optimaldivision');

test('Should return "1000/(100/10/2)" if array [1000, 100, 10, 2] is passed', () => {
  expect(optimalDivision([1000, 100, 10, 2])).toBe('1000/(100/10/2)');
});

test('Should return "2000/(3/4)" if array [1000, 100, 10, 2] is passed', () => {
  expect(optimalDivision([1000, 100, 10, 2])).toBe('1000/(100/10/2)');
});

test('Should return "143/(2/303/542)" if array [143, 2, 303, 542] is passed', () => {
  expect(optimalDivision([143, 2, 303, 542])).toBe('143/(2/303/542)');
});

test('Should return "100/(1000/10/2)" if array [100, 1000, 10, 2] is passed', () => {
  expect(optimalDivision([100, 1000, 10, 2])).toBe('100/(1000/10/2)');
});

test('Should return "2/(2/2)" if array [2, 2, 2] is passed', () => {
  expect(optimalDivision([2, 2, 2])).toBe('2/(2/2)');
});

test('Should return "925" if array [925] is passed', () => {
  expect(optimalDivision([925])).toBe('925');
});

test('Should return "0" for an empty array', () => {
  expect(optimalDivision([])).toBe('0');
});

test('Should return "5/2" is array [5/2] is passed', () => {
  expect(optimalDivision([5, 2])).toBe('5/2');
});

test('Should return "1000/(100/2/3/3/5/6/7/8/9)" if array [1000, 100, 2, 3, 3, 5, 6, 7, 8, 9]', () => {
  expect(optimalDivision([1000, 100, 2, 3, 3, 5, 6, 7, 8, 9])).toBe(
    '1000/(100/2/3/3/5/6/7/8/9)',
  );
});
