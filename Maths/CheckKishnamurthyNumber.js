/*
    Problem statement and Explanation : https://www.geeksforgeeks.org/check-if-a-number-is-a-krishnamurthy-number-or-not-2/

    krishnamurthy number is a number the sum of the all fectorial of the all dights is equal to the number itself.
    145 => 1! + 4! + 5! = 1  + 24 + 120 = 145
*/

// factorail utility method.
const factorial = (n) => {
  let fact = 1
  while (n !== 0) {
    fact = fact * n
    n--
  }
  return fact
}

/**
 * krishnamurthy number is a number the sum of the factorial of the all dights is equal to the number itself.
 * @param {Number} number a number for checking is krishnamurthy number or not.
 * @returns return correspond boolean vlaue, if the number is krishnamurthy number return `true` else return `false`.
 * @example 145 => 1! + 4! + 5! = 1  + 24 + 120 = 145
 */
const CheckKishnamurthyNumber = (number) => {
  // firstly, check that input is a number or not.
  if (typeof number !== 'number') {
    return new TypeError('Argument is not a number.')
  }
  // create a variable to store the sum of all digits factorial.
  let sumOfAllDigitFactorial = 0
  // convert the number to string for convenience.
  String(number).split('').map(digit => {
    // split one by one digit and calculate factorial and store to the variable.
    return (sumOfAllDigitFactorial += factorial(Number(digit)))
  })
  // if the sumOftheFactorial is equal to the given number it means the number is a Krishnamurthy number.
  return sumOfAllDigitFactorial === number
}

module.exports = CheckKishnamurthyNumber
