const makeNumber = str => str ? Array.from(str).filter(a => !isNaN(a)).join('') : undefined;

makeNumber('erer384jjjfd123'); //=>384123
makeNumber('123098h76gfdd'); //=>12309876
makeNumber('ijifjgdj'); //=> should return empty string ->''
