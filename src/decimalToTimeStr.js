function decimalToTimeStr(decimalValue) {
  const hour = parseInt(decimalValue);
  let min = (decimalValue % 1) * 60;
  min = Math.round(min);
  const minStr = min < 10 ? `0${min}` : `${min}`;
  return `${hour}:${minStr}`;
}

module.exports = decimalToTimeStr;
