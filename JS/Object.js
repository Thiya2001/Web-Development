// 1.Literal way

let obj1 = {
    gameName : "coc",
    genre : "Strategy",
    type : "Multiplayer"
};
console.log(obj1);

// 2.Function Constructor

function Nike(a,b,c) {
    this.name = a;
    this.genre = b;
    this.type = c;
}
let obj2 = new Nike("Stumble guys","racing","multiplayer");
console.log(obj2);

// 3.Class Constructor

class Game {
    constructor(a,b,c) {
        this.name = a;
        this.genre = b;
        this.type = c;
    }
}
let obj3 = new Game("Wcc3","Cricket","Multiplayer");
console.log(obj3);

// 4.Object Constructor

let obj4 = new Object();
obj4.name = "Candy crush";
obj4.genre = "Puzzle";
obj4.type = "SinglePlayer";
console.log(obj4);

// task 1 function constructor to create actor name, age, last hit movie, favorite movie

function Actor(a,b,c,d) {
    this.name = a;
    this.age = b;
    this.lastHitMovie = c;
    this.favoriteMovie = d;
}
let obj5 = new Actor("Ajith","50","Thunivu","Vishwasham");
let obj6 = new Actor("Vijay","50","G.O.A.T","Arasiyal");
let obj7 = new Actor("SK","40","madharasi","madharasi");
let obj8 = new Actor("PK","30","dude","Lovetoday");

console.log(obj5);
console.log(obj6);
console.log(obj7);
console.log(obj8);

// task 2 object constructor to create 4 Actor name, age, last hit movie, favorite movie

let obj9 = new Object();
obj9.name = "Ajith";
obj9.age = "50";
obj9.lastHitMovie = "Thunivu";
obj9.favoriteMovie = "Vishwasham";
console.log(obj9);

let obj10 = new Object();
obj10.name = "Vijay";
obj10.age = "50";
obj10.lastHitMovie = "G.O.A.T";
obj10.favoriteMovie = "Arasiyal";
console.log(obj10);

let obj11 = new Object();
obj11.name = "SK";
obj11.age = "40";
obj11.lastHitMovie = "madharasi";
obj11.favoriteMovie = "madharasi";
console.log(obj11);

let obj12 = new Object();
obj12.name = "PK";
obj12.age = "30";
obj12.lastHitMovie = "dude";
obj12.favoriteMovie = "lovetoday";
console.log(obj12);

// Properties

let object1 = {
    name : "Honda",
    price : 200000,
    "model" : "jk5000",
    1 : 900000
};
console.log(object1);
console.log(object1.name);
console.log(object1.model);
console.log(object1["name"]); // not use dot operator using square bracket use string with values

console.log(object1.price); // directly using dot
console.log(object1["price"]); // directly using String
console.log(object1["1"]); // using number
// console.log(object1.1); //Source error

let arr = [];

arr = [10,20,30,40];
console.log(typeof arr, arr);

// task 3 literal way to create one game name, genre, type

let object2 = {
    name : "coc",
    genre : "stategy",
    type : "multiplayer"
};
console.log(object2.name); // directly used
console.log(object2["name"]); // direct string

console.log(object2.genre);
console.log(object2["genre"]);

console.log(object2["type"]);

let anyName = "age";

console.log(anyName);

let object3 = {
    name : "Ms Dhoni",
    abcd : anyName,
    anyName : "thala", // (not provide string) normal variable
    [anyName] : 45, // If provide array will change value
}
console.log(object3);

console.log("--------------Object Keys and Values---------------");

let obj13 = {
    productName : "Iphone",
    price : 100000,
    rating : 4.5,
};

let obj14 = {
    Name : "Samsung",
    Product_price : 80000,
    Product_rating : 4.3,
};

console.log(Object.keys(obj13));
console.log(Object.values(obj13));
console.log(Object.entries(obj13));

console.log(Object.keys(obj14));
console.log(Object.values(obj14));
console.log(Object.entries(obj14));

console.log("--------------Normal Object------------------");

obj13.productName = "Iphone 14 Pro Max";
obj13.quantity = 1;
delete obj13.price;
console.log(obj13);

console.log("--------------Frozen Object------------------");

Object.freeze(obj14);
obj14.Name = "Vivo"; // Not allowed
obj14.quantity = 2; // Not allowed
delete obj14.rating; // Not allowed
console.log(obj14);

console.log("--------------Sealed Object------------------");

let obj15 = {
    productName : "Oneplus",
    price : 50000,
    rating : 4.0,
};

Object.seal(obj15);
obj15.productName = "Oneplus 11R"; // Allowed ==> Only we can modify.
obj15.quantity = 1; // Not allowed
delete obj15.price; // Not allowed
console.log(obj15);

console.log("--------------Merge Object------------------");

let obj16 = {
    name : "thala",
    age : 45,
};

let obj17 = {
    team : "CSK",
    years : 16,
};

Object.assign(obj16, obj17); // Merge two object assign method
console.log(obj16);

console.log("----------------Check True or false---------------");

console.log(Object.isFrozen(obj17)); // false
console.log(Object.isFrozen(obj14)); // true
console.log(Object.isSealed(obj16)); // false
console.log(Object.isSealed(obj15)); // true



