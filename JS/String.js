let str1 = 'I am single quote string';
let str2 = "I am double quote string";
let str3 = `I am template literal string`;
let str4 = new String("I am constructor");

console.log(str1, str2);
console.log(str3);
console.log(str4);

console.log(str1.length);
console.log(str3.length);
console.log(str4.length);

let upper = str1.toUpperCase();
console.log(str1)
console.log(upper);

// length => Non static property

let str5 = "             Next flim of STR Arasan               ";
console.log(str5, str5.length);
console.log(str5.trimStart(), str5.trimStart().length);
console.log(str5.trimEnd(), str5.trimEnd().length);
console.log(str5.trim(), str5.trim().length);

let D = "Mr.D next movie is hindi movie";
console.log(D.startsWith("Mr.D")); // Start with starting character true otherwise false.
console.log(D.startsWith("next", 5));
console.log(D.endsWith("movie")); // End with ending character true otherwise false.
console.log(D.includes("is")); // includes its in string true otherwise false.

let alpha = "abcdefghijklmnopqrstuvwxyz";

console.log(alpha.indexOf("i"));
console.log(alpha.lastIndexOf("i"));

let plan = "Jaddu maybe traded to RR for sanju samson.";

console.log(plan.charAt(4));
console.log(plan.slice(6, 11));
console.log(plan.slice(0, 5));
console.log(plan.slice(35, 41));
console.log(plan.slice(-3, -1)); // Negative index accepted order is important
console.log(plan.substring(0, -1)); //Not accept negative index order is not important
console.log(plan.substring(5, 0));
console.log(plan.charAt(35));
console.log(plan[6]);
console.log(plan.replace("t", "It will replace only one character"));
console.log(plan.replaceAll("t", "It will replace all the old character"));
console.log(plan.concat(" It will be merge both string"));
console.log(plan.split("a")); // Split Method






