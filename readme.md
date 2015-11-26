# Proper-Round

### A rounding function that rounds as expected for all scenarios rather than just most.

Have you looked at your rounding algorithm recently?
Many npm packages available for rounding today don't act as expected for some scenarios.
Such scenarios include rounding 3.445 to the nearest hundredths; they seem to think it should be 3.44 instead of 3.45.

Luckily, proper-round solves this problem by actually using the built-in javascript function Math.round() to get reproducible, correct results.

## Usage

```
var round = require('proper-round')
console.log(round(5.6575, 3)) // logs 5.658
```

Proper-Round takes in two parameters: the value that you're trying to round, and the number of places you're trying to round to.
If you don't supply the number of places, it assumes you're trying to round to, it will round to the nearest whole number.
If you supply a negative number, it will round to power-of-ten places (i.e. -1 to round to 10s, -2 to round to 100s, etc.)

In addition, proper-round comes with a convenience method, `proper-round.money(value)`:

```
var round = require('proper-round')
console.log(round.money(4.95 * 0.7)) // logs 3.47
```

[Here's why the other rounding functions aren't consistent](https://tonicdev.com/kgroat09/tofixed-rounding)

## License

ISC
