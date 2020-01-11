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
const substitute = arr => mapArray(arr, el => el < 30 ? '*' : el);

// task #9
const date = new Date(2019, 0, 2);
const getPastDay = (date, number) => {
    const MS_IN_DAY = 86400000;
    date = date.getTime() - MS_IN_DAY * number;
    return new Date(date).getDate();
}

// task #10
const formatDate = date => {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
}
// Calls
console.log(convert('1', 2, 3, '4'));
 // [1, '2', '3', 4]
console.log(executeforEach([1, 2, 3], el => console.log(el * 2)));
// logs 2 4 6
console.log(mapArray([2, '5', 8], el => el + 3));
// returns [5, 8, 11]
console.log(filterArray([2, 5, 8], el => el % 2 === 0));
// returns [2, 8]
console.log(flipOver('hey world'));
// 'dlrow yeh'
console.log(makeListFromRange([2, 7]));
// [2, 3, 4, 5, 6, 7]
console.log(getArrayOfKeys(actors, 'name'));
// ['tommy', 'lee']
console.log(substitute([58, 14, 48, 2, 31, 29]));
// [58, '*', 48, '*', 31, '*']
console.log(getPastDay(date, 1));
// 1, (1 Jan 2019)
console.log(formatDate(new Date('6/15/2018 09:15:00')));
// "2018/6/15 09:15"