import calculate from '../calculate';

describe('calculate', () => {
  it('should handle AC button correctly', () => {
    const buttonName = 'AC';
    const obj = {
      total: '5',
      next: '0',
      operation: buttonName,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should handle digit buttons correctly', () => {
    const buttonName = '5';
    const obj = {
      total: '0',
      next: null,
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '5',
      next: null,
      operation: null,
    });
  });

  it('should handle operator buttons correctly', () => {
    const buttonName = '+';
    const obj = {
      total: '5',
      next: '3',
      operation: null,
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '5',
      next: '3',
      operation: '+',
    });
  });

  it('should handle "=" button correctly', () => {
    const buttonName = '=';
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '8',
      next: null,
      operation: null,
    });
  });

  it('should handle decimal button correctly', () => {
    const buttonName = '.';
    const obj = {
      total: '5',
      next: '3',
      operation: '+',
    };
    expect(calculate(obj, buttonName)).toEqual({
      total: '5',
      next: '3.',
      operation: '+',
    });
  });
});
