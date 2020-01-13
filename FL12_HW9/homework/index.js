const TWO = 2;
const THREE = 3;
const FIVE = 5;
const SEVEN = 7;
const EIGHT = 8;
const TEN = 10;
const FOURTEEN = 14;
const TWENTYNINE = 29;
const THIRTY = 30;
const THIRTYONE = 31; 
const FOURTYEIGHT = 48;
const FIFTYEIGHT = 59;
const TWO_K_19 = 2019;

// task #1
const convert = (...args) => {
    for (const index in args) {
        if (typeof args[index] === 'string') {
            args[index] = Number(args[index]);
        } else if (typeof args[index] === 'number') {
            args[index] = String(args[index]);
        }
    }
    return args;
}

// task #2
const executeforEach = (arr, fn) => {
    for (const value of arr) {
        fn(value);
    }
}

// task #3
const mapArray = (arr, fn) => {
    let result = [];
    executeforEach(arr, el => result.push(fn(Number(el))));
    return result;
}

// task #4
const filterArray = (arr, fn) => {
    let result = [];
    executeforEach(arr, el => {
        if (fn(el)) {
            result.push(el);
        }
    })
    return result;
}

// task #5
const flipOver = str => {
    let result = '';
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

// task #6
const makeListFromRange = range => {
    let arr = [];
    for (let i = range[0]; i <= range[1]; i++) {
        arr.push(i);
    }
    return arr;
}

// task #7
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

const getArrayOfKeys = (arr, key) => {
    let result = [];
    executeforEach(arr, el => result.push(el[key]));
    return result;
}

// task #8
const substitute = arr => mapArray(arr, el => el < THIRTY ? '*' : el);

// task #9
const date = new Date(TWO_K_19, 0, TWO);
const getPastDay = (date, number) => {
    const MS_IN_DAY = 86400000;
    date = date.getTime() - MS_IN_DAY * number;
    return new Date(date).getDate();
}

// task #10
const formatDate = date => {
    const zero = n => n < TEN ? '0' + n : n;
    const YEAR = date.getFullYear();
    const MONTH = date.getMonth() + 1;
    const DAY = date.getDate();
    const HOURS = zero(date.getHours());
    const MINUTES = zero(date.getMinutes());
    
    return `${YEAR}/${MONTH}/${DAY}\u0020${HOURS}:${MINUTES}`;
}
// Calls
console.log(convert('1', TWO, THREE, '4'));
// [1, '2', '3', 4]
console.log(executeforEach([1, TWO, THREE], el => console.log(el * TWO)));
// logs 2 4 6
console.log(mapArray([TWO, '5', EIGHT], el => el + THREE));
// returns [5, 8, 11]
console.log(filterArray([TWO, FIVE, EIGHT], el => el % TWO === 0));
// returns [2, 8]
console.log(flipOver('hey world'));
// 'dlrow yeh'
console.log(makeListFromRange([TWO, SEVEN]));
// [2, 3, 4, 5, 6, 7]
console.log(getArrayOfKeys(actors, 'name'));
// ['tommy', 'lee']
console.log(substitute([FIFTYEIGHT, FOURTEEN, FOURTYEIGHT, TWO, THIRTYONE, TWENTYNINE]));
// [58, '*', 48, '*', 31, '*']
console.log(getPastDay(date, 1));
// 1, (1 Jan 2019)
console.log(formatDate(new Date('6/15/2018 09:15:00')));
// "2018/6/15 09:15"