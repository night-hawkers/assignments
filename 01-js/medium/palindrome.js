/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const str2 = str.toLowerCase();
  // remove special characters 
  const regex = /[^a-z0-9]/gi;
  str2.replace(regex, '');
  const str1 = str2.split('').reverse().join('')
  if (str1 === str2) {
    return true;
  }
  return false;
}

module.exports = isPalindrome;
