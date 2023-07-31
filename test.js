function toReadable(number) {
    // Arrays to store the words for numbers
    var units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
    // Helper function to convert a two-digit number to words
    function twoDigitsToWords(number) {
      if (number < 10) {
        return units[number];
      } else if (number < 20) {
        return teens[number - 10];
      } else {
        var unit = units[number % 10];
        var ten = tens[Math.floor(number / 10)];
        return ten + (unit ? ' ' + unit : '');
      }
    }
  
    // Helper function to convert a three-digit number to words
    function threeDigitsToWords(number) {
      var hundred = units[Math.floor(number / 100)];
      var twoDigits = twoDigitsToWords(number % 100);
      return (hundred ? hundred + ' hundred' : '') + (twoDigits ? ' ' + twoDigits : '');
    }
  
    // Main function to convert any number to words
    function convertToWords(number) {
      if (number === 0) {
        return units[0];
      } else if (number < 100) {
        return twoDigitsToWords(number);
      } else {
        return threeDigitsToWords(number);
      }
    }
  
    return convertToWords(number);
  }
  
  console.log(toReadable(1)); // Output: 'one'
  console.log(toReadable(997)); // Output: 'nine hundred ninety seven'