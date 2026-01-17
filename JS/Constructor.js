let obj1 = { //Literal way
    name : "Thiyagarajan",
    age : 24,
    mobile : 4589741258,
    email : "abc@gmail.com",
};
console.log(obj1);

function construct(a, b) {
    console.log(this);
    this.name = a;
    // console.log(this);
    this.age = b;
    // console.log(this);
}
// cons();

let obj2 = new construct("Ms dhoni", 43);

let obj3 = new construct("Virat", 34);

let obj4 = new construct("Rohit", 49);
console.log(obj2);
console.log(obj3);
console.log(obj4);

let movie = {
    name : "Dude",
    rating : 4.5,
};
console.log(movie);

movie.name = "Kanthara";
movie.rating = 4.7;
console.log(movie);

movie.name = "Idli Kadai";
movie.rating = 3.9;
console.log(movie);

function abc(a, b) {
    this.name = a;
    this.rating = b;
}

let movie2 = new abc("Dude", 4.4);
let movie3 = new abc("Bison", 4.2);
console.log(movie2, movie3);




