const countNumbers = (str) => {
    let arr = Array.from(str).sort();
    const obj = {};
    arr.forEach(a => {
        if(!isNaN(a)){
            if(obj[`'${a}'`]){
                obj[`'${a}'`]++;
            } else {
                obj[`'${a}'`] = 1;
            }
        }
    });
    return obj;
};

countNumbers('erer384jj4444666888jfd123');
// => {'1': 1, '2': 1, '3': 2, '4': 5, '6': 3, '8': 4}
countNumbers('jdjjka000466588kkkfs662555');
// => {'0': 3, '2': 1, '4': 1, '5': 4, '6': 4, '8': 2}
countNumbers(''); // => {}