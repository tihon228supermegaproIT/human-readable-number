function toReadable(number) {
    const singleDigits = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const twoDigitsLessThan20 = [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0) {
      return 'zero';
    } else {
      return convertNumberToString(number);
    }
    
    function convertNumberToString(number) {
      if (number < 10) {
        return singleDigits[number];
      } else if (number < 20) {
        return twoDigitsLessThan20[number - 10];
      } else if (number < 100) {
        return `${tens[Math.floor(number / 10)]} ${singleDigits[number % 10]}`.trim();
      } else {
        return `${singleDigits[Math.floor(number / 100)]} hundred ${convertNumberToString(number % 100)}`.trim();
      }
    }
  }