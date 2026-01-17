let a = 50;
let b = new Number(100);

console.log(a);
console.log(b);
console.log({});

// Class Constructor

class MyNumber {
    constructor(x, y) {
        this.a = x;
        this.b = y;
        this.c = function() {
            console.log("I am belongs to obj");
        } // Methods
    }

// Non-Static method

    add() {
        return console.log(this.a + this.b);
    }

// static method

    static mul() {
        console.log("I am not belongs to Instance");
    }
}
let MyNumber1 = new MyNumber(10, 5);

console.log(MyNumber1);
MyNumber1.add();
// MyNumber1.mul(); Not will be access
MyNumber.mul();

// Conversion

let number = 50.54855;
console.log(number);

let anotherNumber = new Number(100.5564993); // Explicitly we convert Non Primitive

console.log(anotherNumber);

console.log(anotherNumber.toFixed(2));
console.log(number.toFixed(2)); // Implicitly it will convert to Non primitive

let d = 100000000;
console.log(d.toExponential()); // Automatically it will convert to Non primitive

let e = 50;
console.log(e.valueOf());

let f = 50.45698;
console.log((f.toFixed()));

let g = 5000000;
console.log(g.toExponential());

let h = new Number(50);
console.log(h);

let i = 50;
let j = "50";
console.log(i + j);
console.log(Number.parseInt(j));
console.log(i + Number.parseInt(j));

let k = "50.5434343";
console.log(Number.parseInt(k));
console.log(Number.parseFloat(k));
console.log(Number.isInteger(i)); // true checking integer or not
console.log(Number.isInteger(j)); // false string value so false
console.log(Number.isInteger(f)); // false float value so false

console.log(Number.isFinite(i)); // true checking integer or not
console.log(Number.isFinite(f)); // true float also number values

console.log(Number.isNaN(50));
console.log(Number.isNaN(NaN)); // Only Nan will be true otherwise false

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(9483928742567853214);
console.log(Number.isSafeInteger(7387929772239));
console.log(Number.isSafeInteger(93845278901250585264));

console.log(window);

let num = 50.43234;

let str = "50.43234";
console.log(window.parseInt(num));
console.log(parseFloat(num));
console.log(isFinite(num)); //true

console.log(isNaN(50));
console.log(isNaN("acd"));





















