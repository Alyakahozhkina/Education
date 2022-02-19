//#1
const getDiff = arr => {
  let sortArr = arr.sort((a, b) => a - b) 
  return arr.length ? sortArr[sortArr.length - 1] - sortArr[0] : 0;
}

//#2
const getWordsWithLengthMoreThanNum = (str, num) => str.split(' ').filter((elem) => elem.length > num)

//#3
const getMissingElement = arr => {
  let sortArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortArr.length; i++) {
    if(sortArr[i] !== i) {
      return i;
    }
  }
  return 'All numbers exist in array';
}

//#4
const checkEnding = (str, endOfStr) => str.slice(-endOfStr.length) === endOfStr;

//#5
const averagesInArray = arr => {
  let newArr = []
  for (let i = 1; i < arr.length; i++) {
    newArr.push((arr[i] + arr[i - 1]) / 2);
  }
  return newArr;
}

//#6
const createMaxNum = num => Number(num.toString().split('').sort((a, b) => b - a).join(''));

//#7
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, 
"M": 25,"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23}

const nameScores = name => {
  const score = name.toUpperCase().split('').reduce((score, letter) => score + scores[letter], 0);
  if (score >= 600) {
    alert("THE BEST")
  } else if (score > 300 && score < 600 ) {
    alert("VERY GOOD")
  } else if (score > 60 && score <= 300 ) {
    alert("PRETTY GOOD")
  } else {
    alert("NOT TOO GOOD")
  }
}

//#8
const countVowels = str => {
  const arrOfVowels = str.match(/[aeiouy]/gi);
  return arrOfVowels ? arrOfVowels.length : 0
}

//#9
const removeABC = str => {
  const strWithoutABC = str.replace(/[abc]/gi, '')
  return strWithoutABC !== str ? strWithoutABC : null;
} 

//#10
//for numbers
const differenceNumber = (firstArr, secondArr) => {
  return Array.from(new Set([...firstArr, ...secondArr])).sort((a, b) => a - b);
}

//for all elements
const differenceElement = (firstArr, secondArr) => {
  let newArr = [];
  [...firstArr, ...secondArr].forEach((elem) => {
    if(!newArr.includes(elem)) {
      newArr.push(elem);
    }
  })
  return newArr;
}

//#11
const revertObj = obj => {
  let newObj = {};
  Object.keys(obj).forEach((previousKey) => {
    newObj[obj[previousKey]] = previousKey;
  })
  return newObj
}

//#12
const calculateDifference = (obj, sumInsurance) => Object.values(obj).reduce((sum, elem) => sum + elem, 0) - sumInsurance;

//#13
const leftRotations = str => {
  let arrRotations = [];
  let newStr = str.split('')
  for(let i = 0; i < str.length; i++) {
    arrRotations.push(newStr.join(''));
    newStr.push(newStr.shift());
  }
  return arrRotations;
}
const rightRotations = str => {
  let arrRotations = [];
  let newStr = str.split('')
  for(let i = 0; i < str.length; i++) {
    arrRotations.push(newStr.join(''));
    newStr.unshift(newStr.pop());
  }
  return arrRotations;
}

//#14
const doesBrickFit = (heightBrick, widthBrick, deepBrick, widthHole, heightHole) => {
  if (widthBrick <= widthHole && heightBrick <= heightHole) {
    return true;
  } else if (deepBrick <= widthHole && heightBrick <= heightHole) {
    return true;
  } else if (deepBrick <= widthHole && widthBrick <= heightHole) {
    return true;
  }
  return false;
} 