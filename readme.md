# Pretty Time Decimal
## Convert decimal values to pretty time strings and vice versa

### Install:
```
npm i pretty-time-decimal
```

### Usage:

```js
const { decimalToTimeStr } = require('pretty-time-decimal');

decimalToTimeStr(3.5)           // '3:30'
decimalToTimeStr(3.75)          // '3:45'

const fiveMin = 5 / 60
decimalToTimeStr(3 + fiveMin)   // '3:05'
```
