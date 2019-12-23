const two = 2;
const four = 4;

let a = parseInt(prompt('Enter number a')) || 0;
let b = parseInt(prompt('Enter number b')) || 0;
let c = parseInt(prompt('Enter number c')) || 0;
let x, x1, x2, discriminant;

if (a !== 0 || b !== 0 || c !== 0) {
    discriminant = Math.pow(b, two) - four * a * c;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (two * a);
        x2 = (-b - Math.sqrt(discriminant)) / (two * a);
        console.log(`Discriminant = ${discriminant}`);
        console.log(`x1 = ${x1}; x2 = ${x2}`)
    } else if (discriminant === 0) {
        x = -b / (two * a);
        console.log(`x = ${x}`)
    } else {
        console.log('No solution')
    }
} else {
    console.log('Invalid input data');
}