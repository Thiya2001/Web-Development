let obj1 = {
    name : "Heart beat",
    available : "Hotstar",
    season : 2,
};

let obj2 = {
    rating : 4.5,
    premium : 499,
};

let movie1 = ["dude", "Orange mittai", "vip", "1 in 1000"];
let movie2 = ["ko", "Ghilli", "billa", "mankatha"];

//Spread Operator :

console.log("-----------------------Spread Operator Object & Array-----------------------");

let obj = {...obj1};
console.log(obj);

let movie = [...movie1];
console.log(movie);

// Merge Operator :

console.log("----------------------Merge Operator Object & Array-----------------------");

let mergedObject = {...obj1, ...obj2};
console.log(mergedObject);

let mergedArray = [...movie1, ...movie2];
console.log(mergedArray);

console.log("---------------------Spread Operator function-----------------------");

function abc(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
// abc(movie2, movie, obj1);
abc(...movie1);

//Destructuring Object

console.log("--------------------------Destructuring using Object--------------------------");

let obj3 = {
    name : "Heart beat",
    available : "Hotstar",
    season : 2,
};

let {available, season, name} = obj3;

// console.log(obj3.season);
// console.log(obj3.available);
console.log(available);
console.log(season);
console.log(name);

let obj4 = {
    area : "Srivilliputhur",
    city : "Virudhunagar",
    state : "Tamil Nadu",
};

let {city, state, area} = obj4;

// console.log(obj4.city);
console.log(state);
console.log(city);
console.log(area);

console.log("--------------------------Destructuring using Array--------------------------");

let movie3 = ["dude", "Orange mittai", "vip", "1 in 1000"];

let [first, second, third, fourth] = movie3;

console.log(first, second, third, fourth);

let movie4 = ["Idli kadai", "Vivegam", "RRR"];

let [a, b, c, d] = movie4;

console.log(a, b, c, d);


// Rest Operator

console.log("-----------------------Rest Operator using Object-----------------------");

let obj5 = {
    names : "Heart beat",
    available : "Hotstar",
    seasons : 2,
    rating1 : 4.2,
    premium1 : false,
};

let {names, seasons, ...xyz} = obj5;

console.log(`Movie Name : ` + names + `,` , `Season : ` + seasons);
console.log(xyz);

console.log("-----------------------Rest Operator using Array-----------------------");

let movie5 = ["dude", "Orange mittai", "vip", "1 in 1000"];

let [one, two, ...abcd] = movie5;

console.log(one);
console.log(two);
console.log(abcd);

//Spread Operator using function :

console.log("-----------------------Spread Operator using function-----------------------");

function anyName(...a) {
    console.log(a);
}

anyName(1, 2, 3, 4, 5, 6);






