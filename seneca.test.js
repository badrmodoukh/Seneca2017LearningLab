/* eslint-env jest */
const seneca = require('./seneca');

describe('seneca.isValidEmail()', () => {
  test('isValid returns true for simple myseneca address', () => {
    const simpleEmail = 'someone@myseneca.ca';
    expect(seneca.isValidEmail(simpleEmail)).toBe(true);
  });

  test('returns false for a non-myseneca address', () => {
    const gmailAddress = 'someone@gmail.com';
    expect(seneca.isValidEmail(gmailAddress)).toBe(false);
  });

  test('returns false for a number', () => {
    const str = 1;
    expect(seneca.isValidEmail(str)).toBe(false);
  });

  test('returns false for a boolean', () => {
    const str = true;
    expect(seneca.isValidEmail(str)).toBe(false);
  });

  test('returns false for null', () => {
    const str = null;
    expect(seneca.isValidEmail(str)).toBe(false);
  });

  test('returns false for email containing leading whitespace', () => {
    const str = '  badr@myseneca.ca';
    expect(seneca.isValidEmail(str)).toBe(false);
  });

  test('returns true for professor email ex. (@senecacollege.ca)', () => {
    const str = 'david.humphrey@senecacollege.ca';
    expect(seneca.isValidEmail(str)).toBe(true);
  });

  test('returns true for old professor email ex. (@senecac.on.ca)', () => {
    const str = 'david.humphrey@senecac.on.ca';
    expect(seneca.isValidEmail(str)).toBe(true);
  });

  test('returns false for empty string', () => {
    const str = '';
    expect(seneca.isValidEmail(str)).toBe(false);
  });
});

describe('seneca.formatSenecaEmail()', () => {
  test('adds @myseneca.ca to the end of name', () => {
    const name = 'badr';
    expect(seneca.formatSenecaEmail(name)).toBe('badr@myseneca.ca');
  });

  test('adds @myseneca.ca to the end of name that contains spaces', () => {
    const name = '   badr';
    expect(seneca.formatSenecaEmail(name)).toBe('badr@myseneca.ca');
  });

  test('returns "Invalid" when name is a number', () => {
    const name = 1;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name is a boolean', () => {
    const name = true;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name is null ', () => {
    const name = null;
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });

  test('returns "Invalid" when name is empty ', () => {
    const name = '';
    expect(seneca.formatSenecaEmail(name)).toBe('Invalid');
  });
});
