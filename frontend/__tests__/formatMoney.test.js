import formatMoney from '../lib/formatMoney';

describe('format money function', () => {
  it('works with fractional euros', () => {
    // expect(formatMoney(1)).toEqual('0,01 €');
    const result = formatMoney(1);
    const expected = '0,01 €';

    // Replace non-breaking spaces
    const normalizedResult = result.replace(/\u00A0/g, ' ');
    const normalizedExpected = expected.replace(/\u00A0/g, ' ');

    // Compare normalized strings
    expect(normalizedResult).toEqual(normalizedExpected);
  });

  it('leaves off cents when its whole euros', () => {
    // expect(formatMoney(5000)).toEqual('50 €');
    const result = formatMoney(5000);
    const expected = '50 €';

    // Replace non-breaking spaces
    const normalizedResult = result.replace(/\u00A0/g, ' ');
    const normalizedExpected = expected.replace(/\u00A0/g, ' ');

    // Compare normalized strings
    expect(normalizedResult).toEqual(normalizedExpected);
  });

  it('works with whole and fractional euros', () => {
    // expect(formatMoney(140)).toEqual('1,40 €');
    const result = formatMoney(140);
    const expected = '1,40 €';

    // Replace non-breaking spaces
    const normalizedResult = result.replace(/\u00A0/g, ' ');
    const normalizedExpected = expected.replace(/\u00A0/g, ' ');

    // Compare normalized strings
    expect(normalizedResult).toEqual(normalizedExpected);
  });
});
