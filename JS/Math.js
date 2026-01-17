console.log(Math);
// Generate Random Number :

console.log(Math.random());

// Generate Integer Number :

let dice1 = Math.random() * 6;
console.log(dice1);
console.log(parseInt(dice1));
console.log(parseInt(4.9));
console.log(Math.ceil(4.000000001));

// floor, ceil & round :

console.log("Floor, ceil & round");

let dice2 = Math.random() * 6;

let first = 4.1;
let second = 4.9;

console.log(Math.floor(first), Math.floor(second)); // floor method
console.log(Math.ceil(first), Math.ceil(second)); // ceil method
console.log(Math.round(first), Math.round(second)); // round method

console.log(`0-6 Random Numbers :`);
let dice3 = Math.random() * 6;

console.log(parseInt(dice3));
console.log(Math.ceil(dice3));
console.log(Math.floor(dice3));
console.log(Math.round(dice3));

console.log(`0-13 Random Numbers :`);
let dice4 = Math.random() * 13;

console.log(parseInt(dice4));
console.log(Math.ceil(dice4));
console.log(Math.floor(dice4));
console.log(Math.round(dice4));

let player1 = Math.ceil(Math.random() * 6);
let player2 = Math.ceil(Math.random() * 6);
console.log(`Player 1 : ` + player1);
console.log(`Player 2 : ` + player2);

if(player1 > player2) {
    console.log(`Player 1 win the Match`);
}
else if(player1 < player2) {
    console.log(`Player 2 win the Match`);
}
else {
    console.log("Draw");
}

// Generate OTP :

console.log("Generate OTP :");

let otp1 = Math.ceil(Math.random() * 9999);
console.log(otp1);

// PadStart() :

console.log("PadStart Method :");
// let str = "abcd";
// console.log(str.padStart(4,"s"));
// let str = "ac";
// console.log(str.padStart(4,"s"));
let str = "018";
console.log(str.padStart(6,"3"));

// Generate OTP :

console.log("Generate OTP :");
let otp2 = Math.floor(Math.random() * 9999);
console.log(otp2);
console.log(typeof otp2); // number
console.log(typeof otp2.toString()); // String

// Generate Four Digit OTP :

console.log("Generate Four Digit OTP :");
let otp3 = Math.floor(Math.random() * 9999).toString();
let fourDigitOtp= otp3.padStart(4, "0");
console.log(otp3);
console.log(fourDigitOtp);

// Square using pow Method() :

console.log("Square using pow Method :");
let num1 = 6;
console.log(Math.pow(num1, 2));
console.log(Math.pow(num1, 3));

// Square root using sqrt Method() :

console.log("Square root using sqrt Method :");
let num2 = 64;
console.log(Math.sqrt(num2));

// cube root using cbrt Method() :

console.log("Cube root using cbrt Method :");
let num3 = 64;
console.log(Math.cbrt(num3));

// 2 numbers add Sum and Square root Method()

console.log("2 numbers add Sum and Square root Method :");

let x = 12;
let y = 5;

let sumOfSquares = Math.pow(x, 2) + Math.pow(y, 2);
let sqrtOfSum = Math.sqrt(sumOfSquares);
console.log(sumOfSquares);
console.log(sqrtOfSum);

let shortestDistance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
console.log(shortestDistance);

console.log(Math.PI);

console.log(Math.sin(Math.PI / 2)); //Math.PI = 180 / 2 = 90 ==> sin 90 degree = 1
console.log(Math.cos(0)); // cos(0) degree = 1





