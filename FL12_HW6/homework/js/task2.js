let headA = parseInt(prompt('Enter head A'));
let headB = parseInt(prompt('Enter head B'));
let headC = parseInt(prompt('Enter head C'));
let sideAB, sideBC, sideCA;

if (!isNaN(headA + headB + headC) ) {
    if (headA > 0 && headB > 0 && headC > 0) {
        sideAB = headA + headB;
        sideBC = headB + headC;
        sideCA = headC + headA;

        if (sideAB > headC && sideBC > headA && sideCA > headB) {
            if (sideAB === sideBC && sideBC === sideCA && sideCA === sideAB) {
                console.log('Equilateral triangle')
            } else if (sideAB !== sideBC && sideBC !== sideCA && sideCA !== sideAB) {
                console.log('Scalene triangle')
            } else {
                console.log('Isosceles triangle')
            }
        } else {
            console.log('Triangle doesn\'t exist')
        }
    } else {
        console.log('A triangle must have 3 sides with a positive definite length');
    }
} else {
    console.log('Input values should be ONLY numbers');
}