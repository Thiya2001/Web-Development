console.log(JSON);

console.log("--------------------JSON stringify using Array------------------------");

let arr1 = ["Apple", "Banana", "Grapes", "Orange"];

console.log(arr1.toString()); // Not structure Format
console.log(arr1.join()); // Not structure Format
console.log(JSON.stringify(arr1)); // you can get the structure of array in string format

console.log("--------------------JSON stringify using Object------------------------");

let obj1 = {
    name : "Vignesh",
    age : 22,
    city : "Chennai",
};

console.log(obj1.toString()); // [object Object] Not structure Format
console.log(JSON.stringify(obj1)); // you can get the structure of object in string format

// Local Storage ==> permanent data
// session Storage ==> close tab browser
// stringify  ==> convert object/array into string format
// parse  ==> convert string format into object/array

// Local Storage using Set Item (key, value) :

localStorage.setItem("num", "1");
localStorage.setItem("str", "I am String");
localStorage.setItem("array", arr1);
localStorage.setItem("strArray", JSON.stringify(arr1));
localStorage.setItem("obj", obj1);
localStorage.setItem("anyName", JSON.stringify(obj1));

// Session Storage using Set Item (key, value) :

sessionStorage.setItem("arr", arr1);
sessionStorage.setItem("strArr", JSON.stringify(arr1));
sessionStorage.setItem("obj", obj1);
sessionStorage.setItem("strObj", JSON.stringify(obj1));

console.log("--------------------JSON parse using Array------------------------");

let strArr = "[1, 2, 3, 4, 5]";

console.log(typeof strArr);
console.log(strArr);
console.log(JSON.parse(strArr));

console.log("--------------------JSON parse using Object------------------------");

let strObj = `{"name" : "thala", "age" : 43, "city" : "Chennai"}`;

console.log(typeof strObj);
console.log(strObj);
console.log(JSON.parse(strObj));

// Local Storage using Get Item (key) :

console.log("----------------------Get Item from Local Storage JSON parse using Object-----------------------");

let getObj = localStorage.getItem("anyName");

console.log(getObj);
console.log(JSON.parse(getObj));

console.log("----------------------Get Item from Local Storage JSON parse using Array-----------------------");

let getArr = localStorage.getItem("strArray");

console.log(getArr);
console.log(JSON.parse(getArr));

// Session Storage using Get Item (key) :

console.log("-----------------------Get Item from Session Storage JSON parse using Object-----------------------");

let getSessObj = sessionStorage.getItem("strObj");

console.log(getSessObj);
console.log(JSON.parse(getSessObj));

console.log("----------------------Get Item from Session Storage JSON parse using Array-----------------------");

let getSessArr = sessionStorage.getItem("strArr");

console.log(getSessArr);
console.log(JSON.parse(getSessArr));

// Local Storage using Remove Item (key) :

localStorage.removeItem("array");
localStorage.removeItem("obj");
localStorage.removeItem("num");

// Session Storage using Remove Item (key) :

sessionStorage.removeItem("arr");
sessionStorage.removeItem("obj");

// Clear all Local Storage :

// localStorage.clear();

// Clear all Session Storage :

// sessionStorage.clear();