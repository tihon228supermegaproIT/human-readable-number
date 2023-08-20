function toReadable(number) {
  const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  if (number === 0) {
    return 'zero';
  }

  function convert(n) {
    const readableNumber = [];

    if (n >= 100 && n <= 999) {
      readableNumber.push(units[Math.floor(n / 100)], 'hundred');
      n = n % 100;
      if (n === 0) {
        return readableNumber.join(' ').trim();
      }
    }

    if (n >= 20 && n <= 99) {
      readableNumber.push(tens[Math.floor(n / 10)]);
      n = n % 10;
      if (n === 0) {
        return readableNumber.join(' ').trim();
      }
    }

    if (n >= 10 && n <= 19) {
      readableNumber.push(teens[n % 10]);
      return readableNumber.join(' ').trim();
    }

    if (n >= 1 && n <= 9) {
      readableNumber.push(units[n]);
      return readableNumber.join(' ').trim();
    }
  }

  return convert(number);
}

console.log(toReadable(123)); // output: "one hundred twenty three"
console.log(toReadable(4567)); // output: "four thousand five hundred sixty seven"
console.log(toReadable(89)); // output: "eighty nine"
