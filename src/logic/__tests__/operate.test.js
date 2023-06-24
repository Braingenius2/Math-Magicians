import operate from '../operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '5', '+').toBe('7'));
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('0', '8', '×')).toBe('0');
  });

  it('should perform division correctly', () => {
    expect(operate('9', '-3', '÷')).toBe('-3');
  });

  it('should handle division by zero', () => {
    expect(operate('-9', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo operation correctly', () => {
    expect(operate('6', '6', '%')).toBe('0');
  });

  it('should throw an error for unknown operations', () => {
    expect(operate('6', '6', '/')).toThrowError();
  });
});

