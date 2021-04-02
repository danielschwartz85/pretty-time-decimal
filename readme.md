# Pretty Time Decimal
## Convert decimal values to pretty time strings and vice versa

### Install:
```
npm i pretty-time-decimal
```

### Usage 
Decimal to pretty string:

```js
const { decimalToTimeStr } = require('pretty-time-decimal');

decimalToTimeStr(3.5)            // '3:30'
decimalToTimeStr(3.75)           // '3:45'
decimalToTimeStr(3 + (5 / 60))   // '3:05'
```

### Usage
String to decimal:

```js
const { timeStrToDecimal } = require('pretty-time-decimal');

timeStrToDecimal('3:30')   // 3.5
timeStrToDecimal('3:45')   // 3.75
timeStrToDecimal('3:05')   // 3 + (5 / 60)
```
