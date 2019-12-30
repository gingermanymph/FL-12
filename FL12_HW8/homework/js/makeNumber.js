const makeNumber = (str) => str.split('').filter(a => !isNaN(a)).join('');

makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''
