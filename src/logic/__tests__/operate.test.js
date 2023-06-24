import operate from '../operate';

test('performs addition correctly', () => {
  expect(operate('2', '5', '+').toBe('7'));
})

test('performs subtraction correctly', () => {
  expect(operate('5', '2', '-')).toBe('3');
})

test('performs multiplication correctly', () => {
  expect(operate('0', '8', '×')).toBe('0');
})

test('performs division correctly', () => {
  expect(operate('9', '-3', '÷')).toBe('');
})

test('performs modulus correctly', () => {
  expect(operate('6', '6', '%')).toBe('');
})
