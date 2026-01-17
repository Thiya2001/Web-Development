//Class or function ==> Static Method

class Movie {
    constructor(a, b) {
        this.name = a;
        this.hero = b;
    }

//Instance or Object ==> Non-Static method
    detail() {
        console.log(`${this.name} is a good movie and hero of the movie is ${this.hero}.`);
    }

//Instance or Object ==> static method ==> It will be declared in class owned by class but accessed in obj(Instance).

    static obj() {
        console.log("I am not belongs to Instance");
    }
}
let obj1 = new Movie("Billa", "Ajith");
let obj2 = new Movie("Ghilli", "Vijay");
let obj3 = new Movie("Singam", "Surya");

console.log(obj1, obj2, obj3);

obj1.detail();
obj2.detail();
obj3.detail();

Movie.obj();
// obj1.obj(); // Error

let object = {
    name :"Dhoni",
    age : 43,

//Using Property
    finishing : function () {
        console.log(`${this.name} will finish matches with a six even at the age of ${this.age}`);
    },

//Directly Used
    captainCool() {
        console.log(`${this.name} will be always calm in the ground`)
    }
};
object.finishing();
object.captainCool();