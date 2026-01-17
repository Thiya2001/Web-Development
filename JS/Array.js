let arr1 = [1, 2, 3, 4, 5, 6]; // array way
let arr2 = new Array(1, 2, 3, 4, 5); // Constructor way
let arr3 = Array.from("String"); // Array from way

console.log(arr1);
console.log(arr2);
console.log(arr3);

// 1.POP method --> Will not accept argument

console.log("-----------------POP Method-------------------");
let ipl1 = ["CSK", "RR", "MI", "GT", "LSG", "DC", "KKR", "SRH", "PK", "RCB"];
console.log(ipl1);
ipl1.pop();
console.log(ipl1);
let removable = ipl1.pop();
console.log(ipl1);

// 2.Push method --> Accept the argument

console.log("-----------------PUSH Method-------------------");
let ipl2 = ["CSK", "RR", "MI", "GT", "KKR"];
console.log(ipl2);
ipl2.push("Kochi");
console.log(ipl2);

// 3.Shift method --> It is removing first element

console.log("-----------------SHIFT Method-------------------");
let ipl3 = ["KKR", "CSK", "SRH", "PK", "RCB"];
console.log(ipl3);
ipl3.shift();
console.log(ipl3);

// 4.Unshift method --> It is going to add the first element

console.log("-----------------UNSHIFT Method-------------------");
let ipl4 = ["RR", "MI", "GT", "LSG", "KKR"];
console.log(ipl4);
ipl4.unshift("CSK");
console.log(ipl4);

// 5.Splice method --> Assign starting index and no.of element add & remove

console.log("-----------------SPLICE Method-------------------");

// Remove element

let ipl5 = ["CSK", "RR", "MI", "GT", "LSG", "DC", "KKR"];
console.log(ipl5);
ipl5.splice(2,4);
console.log(ipl5);

// Add element

let ipl6 = ["CSK", "LSG", "DC", "KKR", "SRH", "PK", "RCB"];
console.log(ipl6);
ipl6.splice(1, 1, "RR");
console.log(ipl6);
ipl6.splice(1, 0, "GT", "MI");
console.log(ipl6);

// 6.Array Reverse

console.log("-----------------ARRAY REVERSE Method-------------------");
let arr4 = [1, 2, 3, 4, 5, 6, 7];
arr4.reverse();
console.log(arr4);

// 7.Array Sort

console.log("-----------------ARRAY SORT Method-------------------");
let arr5 = ["Banana", "Apple", "Mango", "Pineapple", "Grapes"];
arr5.sort();
console.log(arr5);

// 8.Higher order method or Iteration method

console.log("-----------------HIGHER ORDER METHOD-------------------");
let csk1 = ["sanju", "ayush", "rutu", "dube", "brevis", "uruvil patel", "dhoni"];

csk1.forEach(function (ele, i, arr) {
    console.log(ele, i, arr);
});

csk1.map((ele, i, arr) => {
    console.log(ele, i, arr);
});

csk1.filter((ele, i, arr) => console.log(ele, i, arr));

//Map will accept one argument
//function will accept three arguments

let forEachValue = csk1.forEach((e) => {
    return 10;
});

console.log(csk1);
console.log(forEachValue);

let mapValue = csk1.map((e, i, arr) => {
    return e + " csk";
});

console.log(csk1);
console.log(mapValue);

let number = [1, 2, 3, 4, 5, 6]

let filterValue = number.filter((e, i, arr) => {
    if(e % 2 == 0) {
        return  e;
    }
});
console.log(number);
console.log(filterValue);

let findValue = number.find((e, i, arr) => {
    if(e % 2 == 0) {
        return e;
    }
});

console.log(number);
console.log(findValue);


let csk2 = ["sanju", "ayush", "rutu", "dube", "brevis", "uruvil patel", "dhoni"];

let upperCSK = csk2.map((e) => e.toUpperCase());

let startCSK = csk2.filter((e) => {
    if(e.includes("u")) {
        return e;
    }
});

let indexCSK = csk2.findIndex((e) => {
    if(e.startsWith("d")) {
        return e;
    }
});

console.log(csk2);
console.log(upperCSK);
console.log(startCSK);
console.log(indexCSK);

// Iteration method

let arr6 = [1, 2, 3, 4, 5, 6];

console.log("---------reduce Value------------");
let reduceValue = arr6.reduce((a, e, i, arr6) => {
    console.log(a, e);
    return a + e;
});
console.log(reduceValue);

console.log("----------reduce right-------------");
let rightValue = arr6.reduceRight((a, e, i, arr7) => {
    console.log(a, e);
    return a + e;
});
console.log(rightValue);

console.log("---------some value & Every value-----------");
let someValue = arr6.some((e, i, arr) => {
    if(e % 5 == 0) {
        return true;
    }
});

let everyValue = arr6.every((e, i, arr) => {
    if(e % 5 == 0) {
        return true;
    }
});
console.log(someValue, everyValue);

// converting Array to string

let joinConversion = arr6.join("a, ");

let stringConversion = arr6.toString();

console.log(joinConversion);
console.log(stringConversion);

// Product of array

class product {
    constructor(a, b, c) {
        this.name = a;
        this.price = b;
        this.rating = c;
    }
}
let obj1 = new product("Moto", 20000, 4.5);
let obj2 = new product("Samsung", 120000, 4.3);
let obj3 = new product("iphone", 1500000, 4.8);
let obj4 = new product("One plus", 45000, 4.6);
let obj5 = new product("Nokia", 35000, 4.1);

let allProducts = [obj1, obj2, obj3, obj4, obj5];
console.log(allProducts);

console.log("----------Push Method on Products Array-----------");
allProducts.push(new product("Redmi", 25000, 4.2));
console.log(allProducts);

console.log("----------Shift Method on Products Array-----------");
allProducts.shift();
console.log(allProducts);

console.log("----------Filter Method on Products Array-----------");
console.log("-----------Filter name on Products Array-------------");

let filteredName = allProducts.filter((ele, i, arr) => {
    if(ele.name.includes("i")) {
        return ele;
    }
});
console.log(allProducts);
console.log(filteredName);

console.log("-----------Filter price on Products Array-------------");

let filteredPrice = allProducts.filter((ele, i, arr) => {
    if(ele.price > 50000) {
        return ele;
    }
});
console.log(allProducts);
console.log(filteredPrice);

console.log("-----------Filter rating on Products Array-------------");

let filteredRating = allProducts.filter((ele, i, arr) => {
    if(ele.rating >= 4.5) {
        return ele;
    }
});
console.log(allProducts);
console.log(filteredRating);

console.log("--------------All Filtered on Product Array--------------");

let allFiltered = allProducts.filter((ele, i, arr) => {
    if(ele.name.includes("i") && ele.price > 30000 && ele.rating >= 4.3) {
        return ele;
    }
});

console.log(allFiltered);
