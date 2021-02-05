/* eslint-disable no-undef */
const assert = require('assert').strict;
const { timeStrToDecimal } = require('../index');

describe('timeStrToDecimal', () => {
  it('works', () => {
    const timeStr = timeStrToDecimal('3:45');
    assert.equal(timeStr, 3.75);
  });

  it('padds zeros to the right', () => {
    const timeStr = timeStrToDecimal('3:30');
    assert.equal(timeStr, 3.5);
  });

  it('padds zeros to the left', () => {
    const fiveMin = 5 / 60;
    const timeStr = timeStrToDecimal('3:05');
    assert.equal(timeStr, 3 + fiveMin);
  });
});
