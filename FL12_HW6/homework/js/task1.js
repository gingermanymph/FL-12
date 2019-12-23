// Your code goes here
const two = 2;
const four = 4;

let a = parseInt(prompt('Enter number a'));
let b = parseInt(prompt('Enter number b'));
let c = parseInt(prompt('Enter number c'));
let x, x1, x2, discriminant;

if (!isNaN(a) || !isNaN(b) || !isNaN(c)) {
    if (a !== 0 || b !== 0 || c !== 0) {
        discriminant = Math.pow(b, two) - four * a * c;
        if (discriminant > 0) {
            x1 = (-b + Math.sqrt(discriminant)) / (two * a);
            x2 = (-b - Math.sqrt(discriminant)) / (two * a);
            console.log(`Discriminant = ${Math.sqrt(discriminant)}`);
            console.log(`x1 = ${x1}; x2 = ${x2}`)
        } else if( discriminant === 0) {
            x = -b / (two * a);
            console.log(`x = ${x}`)
        }else{       
            console.log('No solution')
        } 
    } else {
        console.log('Invalid input data');
    }
} else {
    console.log('Invalid input data');
}