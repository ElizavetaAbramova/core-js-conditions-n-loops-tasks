/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = 0;
  if (a > b && a > c) max = a;
  else if (b > c) max = b;
  else max = c;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = false;

  if (queen.x === king.x) result = true;
  if (queen.y === king.y) result = true;

  for (let i = queen.x, j = queen.y; i <= 8; i += 1, j += 1) {
    if (i === king.x && j === king.y) {
      result = true;
    }
  }

  for (let i = queen.x, j = queen.y; i > 0; i -= 1, j -= 1) {
    if (i === king.x && j === king.y) {
      result = true;
    }
  }

  for (let i = queen.x, j = queen.y; i > 0; i -= 1, j += 1) {
    if (i === king.x && j === king.y) {
      result = true;
    }
  }

  for (let i = queen.x, j = queen.y; i <= 8; i += 1, j -= 1) {
    if (i === king.x && j === king.y) {
      result = true;
    }
  }

  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result;
  if (a + b <= c || a + c <= b || b + c <= a) {
    result = false;
  } else if (a === b || a === c || b === c) {
    result = true;
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanNum = '';
  if (num / 10 > 0) {
    for (let i = 1; i <= num / 10; i += 1) {
      romanNum = `${romanNum}X`;
    }
  }

  switch (num % 10) {
    case 1:
      romanNum = `${romanNum}I`;
      break;
    case 2:
      romanNum = `${romanNum}II`;
      break;
    case 3:
      romanNum = `${romanNum}III`;
      break;
    case 4:
      romanNum = `${romanNum}IV`;
      break;
    case 5:
      romanNum = `${romanNum}V`;
      break;
    case 6:
      romanNum = `${romanNum}VI`;
      break;
    case 7:
      romanNum = `${romanNum}VII`;
      break;
    case 8:
      romanNum = `${romanNum}VIII`;
      break;
    case 9:
      romanNum = `${romanNum}IX`;
      break;
    default:
      romanNum = `${romanNum}`;
  }
  return romanNum;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultString = '';

  function symbol(char) {
    let strDigit;
    switch (char) {
      case '-':
        strDigit = 'minus';
        break;
      case ',':
      case '.':
        strDigit = 'point';
        break;
      case '0':
        strDigit = 'zero';
        break;
      case '1':
        strDigit = 'one';
        break;
      case '2':
        strDigit = 'two';
        break;
      case '3':
        strDigit = 'three';
        break;
      case '4':
        strDigit = 'four';
        break;
      case '5':
        strDigit = 'five';
        break;
      case '6':
        strDigit = 'six';
        break;
      case '7':
        strDigit = 'seven';
        break;
      case '8':
        strDigit = 'eight';
        break;
      case '9':
        strDigit = 'nine';
        break;
      default:
        break;
    }
    return strDigit;
  }
  for (let i = 0; i < numberStr.length; i += 1) {
    resultString = `${resultString}${symbol(numberStr[i])}`;
    if (i !== numberStr.length - 1) {
      resultString += ' ';
    }
  }
  return resultString;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = true;
  for (let i = 0; i < Math.floor(str.length / 2); i += 1) {
    if (str[i] !== str[str.length - 1 - i]) {
      result = false;
    }
  }
  return result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} NUM - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let NUM = num;
  let result = false;
  while (NUM > 0) {
    if (NUM % 10 === digit) {
      result = true;
    }
    NUM = Math.floor(NUM / 10);
  }
  return result;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  let index = 1;
  if (arr.length < 3) {
    index = -1;
    return index;
  }

  let leftHalf = 0;
  let rightHalf = 0;

  for (let i = 0; i < index; i += 1) {
    leftHalf += arr[i];
  }
  for (let j = index + 1; j < arr.length; j += 1) {
    rightHalf += arr[j];
  }

  while (leftHalf !== rightHalf && index < arr.length - 1) {
    rightHalf -= arr[index + 1];
    leftHalf += arr[index];
    index += 1;
  }

  if (leftHalf !== rightHalf) index = -1;
  return index;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const result = [];
  let array = [];
  for (let i = 0; i < size; i += 1) {
    array = [];
    for (let j = 0; j < size; j += 1) {
      array[j] = 0;
    }
    result[i] = array;
  }

  let counter = 1;
  let startCol = 0;
  let endCol = size - 1;
  let startRow = 0;
  let endRow = size - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i += 1) {
      result[startRow][i] = counter;
      counter += 1;
    }
    startRow += 1;
    for (let j = startRow; j <= endRow; j += 1) {
      result[j][endCol] = counter;
      counter += 1;
    }
    endCol -= 1;
    for (let k = endCol; k >= startCol; k -= 1) {
      result[endRow][k] = counter;
      counter += 1;
    }
    endRow -= 1;
    for (let l = endRow; l >= startRow; l -= 1) {
      result[l][startCol] = counter;
      counter += 1;
    }
    startCol += 1;
  }
  return result;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  let left = 0;
  let right = matrix.length - 1;
  const rotatedMatrix = matrix;
  while (left < right) {
    for (let i = 0; i < right - left; i += 1) {
      const top = left;
      const bottom = right;
      const topLeft = matrix[top][left + i];
      rotatedMatrix[top][left + i] = matrix[bottom - i][left];
      rotatedMatrix[bottom - i][left] = matrix[bottom][right - i];
      rotatedMatrix[bottom][right - i] = matrix[top + i][right];
      rotatedMatrix[top + i][right] = topLeft;
    }
    left += 1;
    right -= 1;
  }
  return rotatedMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const res = arr;
  function merge(left, right) {
    const result = Array(left.length + right.length);
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result[k] = left[i];
        i += 1;
      } else {
        result[k] = right[j];
        j += 1;
      }
      k += 1;
    }

    while (i < left.length) {
      result[k] = left[i];
      i += 1;
      k += 1;
    }

    while (j < right.length) {
      result[k] = right[j];
      j += 1;
      k += 1;
    }

    return result;
  }

  function mergeSort(array) {
    const half = Math.floor(array.length / 2);
    if (array.length < 2) return array;

    const left = Array(half);
    const right = Array(array.length - half);

    for (let i = 0; i < half; i += 1) {
      left[i] = array[i];
    }

    for (let i = half; i < array.length; i += 1) {
      right[i - half] = array[i];
    }

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);
  }

  const sorted = mergeSort(arr);

  for (let i = 0; i < sorted.length; i += 1) {
    res[i] = sorted[i];
  }

  return res;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  for (let i = 1; i <= iterations; i += 1) {
    let odd = '';
    let even = '';
    for (let j = 0; j < str.length; j += 1) {
      if (j % 2 === 0) {
        even += result[j];
      } else odd += result[j];
    }
    result = `${even}${odd}`;
    if (result === str) {
      return shuffleChar(str, iterations % i);
    }
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822   => 92028
 * 321321  => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let numberStr = [...String(number)];
  function changeDigits(substr) {
    const change = substr;
    const base = Number(change[0]);
    let closestMax = base;
    let index = 0;
    for (let i = 1; i < change.length; i += 1) {
      if (closestMax === base && Number(change[i]) > base) {
        closestMax = Number(change[i]);
        index = i;
      }
      if (Number(change[i]) > base && Number(change[i]) < closestMax) {
        closestMax = Number(change[i]);
        index = i;
      }
    }

    if (index === 0) {
      return change;
    }

    let restNumbers = Array(change.length - 1);
    let restNumIndex = 0;
    for (let i = 0; i < change.length; i += 1) {
      if (i !== index) {
        restNumbers[restNumIndex] = Number(change[i]);
        restNumIndex += 1;
      }
    }

    restNumbers = sortByAsc(restNumbers);

    let result = `${closestMax}`;
    for (let i = 0; i < restNumbers.length; i += 1) {
      result = `${result}${restNumbers[i]}`;
    }

    return result;
  }

  let sub = '';
  for (let i = numberStr.length - 1; i >= 0; i -= 1) {
    sub = `${numberStr[i]}${sub}`;
    const rightHalf = changeDigits(sub);
    if (sub !== rightHalf) {
      let leftHalf = '';
      for (let j = 0; j < i; j += 1) {
        leftHalf = `${leftHalf}${numberStr[j]}`;
      }
      numberStr = `${leftHalf}${rightHalf}`;
      break;
    }
  }
  return Number(numberStr);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
