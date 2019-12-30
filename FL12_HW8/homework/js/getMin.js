const getMin = (...args) => args.reduce((min, last) => last < min ? last : min );

getMin(3, 0, -3); 