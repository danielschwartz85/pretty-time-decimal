function timeStrToDecimal(timeStr) {
  const [hour, min] = timeStr.split(':').map(Number);
  return hour + (min / 60);
}

module.exports = timeStrToDecimal;
