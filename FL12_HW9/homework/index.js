// task #1
const convert = (...args) => {
    for (const index in args) {
        if (typeof args[index] === 'string') {
            args[index] = Number(args[index]);
        } else if (typeof args[index] === 'number') {
            args[index] = String(args[index]);
        }
    }
    return [...args];
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
    executeforEach(arr, el =>
        result.push(fn(Number(el)))
    );
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
    executeforEach(arr, el => {
        result.push(el[key]);
    });
    return result;
}

// task #8
const substitute = arr => mapArray(arr, el => el < 30 ? '*' : el);

// task #9

// task #10

// Calls
convert('1', 2, 3, '4'); // [1, '2', '3', 4]
executeforEach([1, 2, 3], el => console.log(el * 2)); // logs 2 4 6
mapArray([2, '5', 8], el => el + 3); // returns [5, 8, 11]
filterArray([2, 5, 8], el => el % 2 === 0); // returns [2, 8]
flipOver('hey world'); // 'dlrow yeh'
makeListFromRange([2, 7]); // [2, 3, 4, 5, 6, 7]
getArrayOfKeys(actors, 'name'); // ['tommy', 'lee']
substitute([58, 14, 48, 2, 31, 29]); // [58, '*', 48, '*', 31, '*']