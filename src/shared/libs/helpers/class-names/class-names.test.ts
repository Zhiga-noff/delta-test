import { classNames } from './class-names';

describe('classNames', () => {
  test('classNames с единственным первым параметром', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('classNames с первой пустой строкой', () => {
    expect(classNames('')).toBe('');
  });
  test('classNames с первым параметром и массивом строк', () => {
    expect(classNames('someClass', ['someTwo'])).toBe('someClass someTwo');
  });
  test('classNames с первым параметром и пустым массивом', () => {
    expect(classNames('someClass', [])).toBe('someClass');
  });
  test('classNames с первым параметром и объектом с одним положительным ключем и одним отрицательным', () => {
    expect(classNames('someClass', [], { someTwo: true, someThree: false })).toBe('someClass someTwo');
  });
  test('classNames с первым параметром и объектом с двумя положительными', () => {
    expect(classNames('someClass', [], { someTwo: true, someThree: true })).toBe('someClass someTwo someThree');
  });
  test('classNames с первым параметром и объектом с двумя отрицательными', () => {
    expect(classNames('someClass', [], { someTwo: false, someThree: false })).toBe('someClass');
  });
  test('classNames с первым параметром и пустым объектом', () => {
    expect(classNames('someClass', [], {})).toBe('someClass');
  });
});
