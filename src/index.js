/**
 * Converts a number to its readable form.
 *
 * @param {number} num - The number to be converted.
 * @returns {string} The readable form of the number.
 */
function toReadable(num) {
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
 
    if (num === 0) {
        return 'zero';
    }
 
    /**
     * Recursive helper function to convert a number less than 1000 to its readable form.
     *
     * @param {number} n - The number to be converted.
     * @returns {string} The readable form of the number.
     */
    function convertLessThanThousand(n) {
        let result = '';
 
        if (n >= 100) {
            result += units[Math.floor(n / 100)] + ' hundred ';
            n %= 100;
        }
 
        if (n >= 20) {
            result += tens[Math.floor(n / 10)] + ' ';
            n %= 10;
        }
 
        if (n > 0) {
            if (n < 10) {
                result += units[n] + ' ';
            } else {
                result += teens[n - 10] + ' ';
            }
        }
 
        return result.trim();
    }
 
    let readable = '';
 
    if (num >= 1000000000) {
        readable += convertLessThanThousand(Math.floor(num / 1000000000)) + ' billion ';
        num %= 1000000000;
    }
 
    if (num >= 1000000) {
        readable += convertLessThanThousand(Math.floor(num / 1000000)) + ' million ';
        num %= 1000000;
    }
 
    if (num >= 1000) {
        readable += convertLessThanThousand(Math.floor(num / 1000)) + ' thousand ';
        num %= 1000;
    }
 
    readable += convertLessThanThousand(num);
 
    return readable.trim();
}
 
// Usage Example
const number = 123456789;
const readableNumber = toReadable(number);
console.log(`The readable form of ${number} is: ${readableNumber}`);
