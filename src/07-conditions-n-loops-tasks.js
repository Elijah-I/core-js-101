/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */

/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  let res = '';
  if (num % 3 === 0) res += 'Fizz';
  if (num % 5 === 0) res += 'Buzz';

  return res || num;
}

/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n, res = 1) {
  if (n > 1) return getFactorial(n - 1, res * n);
  return res;
}

/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  return Array(n2 - n1 + 1)
    .fill(0)
    .map((el, i) => el + i + n1)
    .reduce((a, b) => a + b);
}

/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(...args) {
  const sides = [...args].sort((a, b) => a - b);
  const maxSide = sides.pop();

  return maxSide < sides.reduce((a, b) => a + b);
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const RectA = { ...rect1 };
  const RectB = { ...rect2 };

  RectA.right = RectA.left + RectA.width;
  RectB.right = RectB.left + RectB.width;
  RectA.bottom = Math.abs(-RectA.top - RectA.height);
  RectB.bottom = Math.abs(-RectB.top - RectB.height);

  if (
    RectA.left >= RectB.right
    || RectA.top >= RectB.bottom
    || RectA.right <= RectB.left
    || RectA.bottom <= RectB.top
  ) return false;

  return true;
}

/* */
/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return (
    (point.x - circle.center.x) ** 2 + (point.y - circle.center.y) ** 2
    < circle.radius ** 2
  );
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const dubled = [];

  for (let i = 0; i < str.length; i += 1) {
    let uniq = true;
    const char = str[i];

    if (dubled.includes(char)) {
      uniq = false;
    } else {
      for (let j = +i + 1; j < str.length; j += 1) {
        if (char === str[j]) {
          dubled.push(char);
          uniq = false;
          break;
        }
      }
    }

    if (uniq) {
      return char;
    }
  }

  return null;
}

/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  return `${isStartIncluded ? '[' : '('}${a > b ? b : a}, ${a > b ? a : b}${
    isEndIncluded ? ']' : ')'
  }`;
}

/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  return str
    .split(' ')
    .map((word) => Array.from(word).reverse().join(''))
    .reverse()
    .join(' ');
}

/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  return +Array.from(num.toString()).reverse().join('');
}

/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(num) {
  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(num)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  const value = num.toString().replace(/\D/g, '');

  for (let n = value.length - 1; n >= 0; n -= 1) {
    const cDigit = value.charAt(n);
    nDigit = parseInt(cDigit, 10);

    if (bEven) {
      nDigit *= 2;
      if (nDigit > 9) {
        nDigit -= 9;
      }
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  const sum = Array.from(num.toString()).reduce((a, b) => +a + +b);

  if (sum > 9) {
    return getDigitalRoot(sum);
  }

  return sum;
}

/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const stack = [];
  const breckets = Array.from(str);
  const OPEN_BRECKET = ['{', '[', '(', '<'];
  const CLOSE_BRECKET_PAIR = {
    '}': '{',
    ']': '[',
    ')': '(',
    '>': '<',
  };

  for (let i = 0; i < breckets.length; i += 1) {
    let push = false;
    const brecket = breckets[i];

    if (OPEN_BRECKET.includes(brecket)) push = true;
    else if (stack[stack.length - 1] !== CLOSE_BRECKET_PAIR[brecket]) push = true;

    if (push) stack.push(brecket);
    else stack.pop();
  }

  return !stack.length;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const splitPath = (path) => path.split(/(\/)/g).filter((n) => n);

  const getCommotPath = (common, pathA, pathB) => {
    const prewRes = [...common];
    const newRes = [];

    for (let i = 0; i < pathA.length; i += 1) {
      if (pathA[i] === pathB[i]) {
        if (!prewRes[i]) {
          newRes[i] = pathA[i];
        } else if (prewRes[i] !== pathA[i]) {
          return newRes;
        }
      } else {
        return newRes;
      }
    }

    return newRes;
  };

  let common = [];

  for (let i = 0; i < pathes.length; i += 1) {
    const pathA = splitPath(pathes[i]);

    for (let j = i + 1; j < pathes.length; j += 1) {
      const pathB = splitPath(pathes[j]);
      common = [...getCommotPath(common, pathA, pathB)];
    }
  }

  return common.join('');
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  if (m1[0].length !== m2.length) {
    throw Error('wrong matrix');
  }

  const m = [];
  const resMatrixH = m1.length;
  const resMatrixW = m2[0].length;

  for (let i = 0; i < resMatrixH; i += 1) {
    for (let j = 0; j < resMatrixW; j += 1) {
      let sum = 0;
      if (!m[i]) m[i] = [];

      for (let x = 0; x < m1[j].length; x += 1) {
        sum += m1[i][x] * m2[x][j];
      }

      m[i][j] = sum;
    }
  }

  return m;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  let win;

  const check = (order, type) => {
    if (win) return win;

    const getA = (i) => (type === 'line' ? order : i);
    const getB = (i) => (type === 'line' ? i : order);

    const localWin = position[getA(0)][getB(0)];

    for (let i = 0; i < position.length - 1; i += 1) {
      if (position[getA(i)][getB(i)] !== position[getA(i + 1)][getB(i + 1)]) {
        return undefined;
      }
    }

    return localWin;
  };

  const checkDiag = (isMain) => {
    if (win) return win;

    const localWin = position[1][1];

    for (let i = 0; i < position.length - 1; i += 1) {
      const x = i;
      const y = isMain ? i : position.length - i - 1;
      const offset = isMain ? 1 : -1;

      if (position[x][y] !== position[x + 1][y + offset]) {
        return undefined;
      }
    }

    return localWin;
  };

  for (let j = 0; j < position.length; j += 1) {
    win = check(j, 'line');
    win = check(j, 'column');
  }

  win = checkDiag(1);
  win = checkDiag(0);

  return win;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
