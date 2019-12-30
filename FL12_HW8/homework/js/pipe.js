const addOne = x => x + 1;
// recursive function 
const pipe = (n, ...funcs) => {
    if (funcs.length === 0) {
        return n
    }
    return pipe(funcs.pop()(n), ...funcs)
}

pipe(1, addOne)
pipe(1, addOne, addOne)