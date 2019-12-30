const getMin = (...args) => args.reduce((min, last) => last < min ? last : min, args[0]);

getMin(3, 0, -3); 