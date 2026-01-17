function anyName() {
    console.log("I am from function");
}
anyName();

function sum(x, y) {
    console.log(`x = ${x}, y = ${y}`);
    console.log(`sum of ${x} and ${y} is ${x + y}`);
    console.log(`Subtraction of ${x} and ${y} is ${x - y}`);
    console.log(`Multiplication of ${x} and ${y} is ${x * y}`);
    console.log(`Division of ${x} and ${y} is ${x / y}`);
}
sum(10, 7);

function addition(a, b) {
    console.log("Hi");
    return a + b;
}

let additionFunction = addition; //function is assigned to variable
let additionValue = addition(10, 6); //return value of function is assigned to variable

// console.log(addition, additionFunction);

console.log(additionValue);

function multiplication(p, q) {
    console.log("Now this code will be readed");
    console.log(p);
    console.log(q);

    return p * q;
}
// let mulFun = null;
// let mulValue = mul();
let mulValue2 = multiplication(5, 4);
console.log(mulValue2);

// Types of Function :
// 1.Named Function
function namedFunction(a, b) {
    console.log("I am a named function");
}
namedFunction();

// 2.Annonymous Function

// function () {

// }

// 3.Function with Expression

let namedFunctionExpression = function ex() {
    console.log("I am a named function expression");
};
namedFunctionExpression();
// ex();  This will throw an error because 'ex' is not defined in this scope

let AnnonymousFunctionExpression = function() {
    console.log("I am an annonymous function expression");
};
AnnonymousFunctionExpression();

// 4.IIFE (Immediately Invoked Function Expression)

(function functionIIFE() {
    console.log("I am an IIFE function");
})();

// 5.Arrow Function

let arrowFunction = (x, y) => {
    console.log("I am an arrow function");
};
arrowFunction();

let additionFun = (a, b) => {
    return a + b;
};
console.log(additionFun(10, 5));

let subtractionFun = (a, b) => {
    return a - b;
};
console.log(subtractionFun(20, 5));

let multiplicationFun = (a, b) => {
    return a * b;
};
console.log(multiplicationFun(4, 39));

let divisionFun = (a, b) => (a / b);
console.log(divisionFun(100, 5));

let arrowWithoutParenthesis = a => a * a; //when there is only one parameter, parenthesis can be omitted
console.log(arrowWithoutParenthesis(5));

// 6.Nested Function : //The Function inside another Function

function outer() {
    console.log("I am outer function");

    function innerFun() {
        console.log("I am Inner Function");
    }
    innerFun();
}
//innerFun(); // This will throw an error because innerFun is not defined in this scope
outer();

// 7.Higher Function
// 8.Call back Function

let x = 500;
let y = 1000;

function add() {
    console.log("I am from add function");
    return 5000;
}

function result(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);

    console.log(a + b);
}
result(x, y, add); //result is higher order add is callback function

function additionHigh(p, q) {
    return p + q;
}
function multiplicationHigh(p, q) {
    return p * q;
}
function subtractionHigh(p, q) {
    return p - q;
}

function resultHigh(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(c(a, b));
}
resultHigh(x, y, additionHigh);
resultHigh(x, y, multiplicationHigh);

// 9.Genrator Function

function* genratorFun() {
    console.log("I am Genrator Function");
    yield 100;
    console.log("Hii");
    yield 500;
    console.log("Bye");
}
let genObj = genratorFun();
// console.log(genObj);
// genObj.next();
// genObj.next();
// genObj.next();
console.log(genObj.next()); //done false value 100
console.log(genObj.next()); //done false value 500
console.log(genObj.next()); //done true value undefined

// lexical Scope ==> Inner function can access Outer function but Outer function cannot access Inner function.
// scope chain ==> Inner most scope (current scope) to global scope.
// closure ==> It is a scope. It will be created inner function accessing outer function variable. Not for all the variables. Only for the variables which can be access in inner function.

let a = 100;

function outerFunction() {
    let a = 5000;
    function innerFunction() {
        let b = 3000;
        console.log(a); // lexical scope
    }
    innerFunction();
    console.log(a); // lexical scope
}
outerFunction();

//Closure

function outerFun() {
    let a = "Thala";
    let c = "Kanama";
    function innerFun() {
        let b = "Virat";
        console.log(c);
    }
    return innerFun;
}
let outerValue = outerFun(); // outer function complete the execution
outerValue(); // inner function accessing outer function variables