function toReadable(number) {
  // Создаем массивы со словами для цифр, десятков и сотен
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  // Если число равно нулю, возвращаем 'zero'
  if (number === 0) {
    return 'zero';
  }

  // Преобразуем число в строку и разбиваем его на разряды
  const numString = number.toString().split('');

  // Если число меньше 10, возвращаем слово из массива единиц
  if (number < 10) {
    return ones[number];
  }

  // Если число меньше 20, возвращаем слово из массива тинов или комбинацию из массива десятков и массива единиц
  if (number < 20) {
    return teens[number - 10];
  }

  // Если число меньше 100, возвращаем комбинацию из массива десятков и массива единиц
  if (number < 100) {
    return tens[numString[0]] + ' ' + ones[numString[1]];
  }

  // Если число меньше 1000, возвращаем комбинацию из массива сотен, массива десятков и массива единиц
  if (number < 1000) {
    return ones[numString[0]] + ' hundred ' + toReadable(parseInt(numString.slice(1).join('')));
  }
}
