/* eslint-disable no-undef */
const assert = require('assert').strict;
const { decimalToTimeStr } = require('../index');

describe('decimalToTimeStr', () => {
  it('works', () => {
    const timeStr = decimalToTimeStr(3.75);
    assert.equal(timeStr, '3:45');
  });

  it('padds zeros to the right', () => {
    const timeStr = decimalToTimeStr(3.5);
    assert.equal(timeStr, '3:30');
  });

  it('padds zeros to the left', () => {
    const fiveMin = 5 / 60;
    const timeStr = decimalToTimeStr(3 + fiveMin);
    assert.equal(timeStr, '3:05');
  });
});
