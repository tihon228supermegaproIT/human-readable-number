function toReadable(number) {
    // Define the words for numbers 0-19
    const words = [
      "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];
  
    // Define the words for tens multiples
    const tensWords = [
      "", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
    ];
  
    // Handle number 0
    if (number === 0) {
      return "zero";
    }
  
    // Handle numbers 1-19
    if (number < 20) {
      return words[number];
    }
  
    // Handle numbers 20-99
    if (number < 100) {
      let tens = Math.floor(number / 10);
      let ones = number % 10;
      return tensWords[tens] + (ones ? " " + words[ones] : "");
    }
  
    // Handle numbers 100 and above
    if (number >= 100) {
      let hundreds = Math.floor(number / 100);
      let remainder = number % 100;
      return words[hundreds] + " hundred" + (remainder ? " " + toReadable(remainder) : "");
    }
  }