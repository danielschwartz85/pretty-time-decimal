function timeStrToDecimal(timeStr) {
  const [hour, min] = timeStr.split(':');
  return Number(hour) + (Number(min) / 60);
}

module.exports = timeStrToDecimal;
