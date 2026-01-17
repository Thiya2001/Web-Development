console.log(this);

function abc() {
    console.log(this); //window
}
window.abc();

let obj = {
    food : "Biryani",
    price : 200,
    greetings : function() {
        console.log(this); //obj
    },
};
obj.greetings();
console.log(obj);

let movie = {
    name : "Bison",
    rating : 4,
    review : function () {
        console.log(this.name);
        console.log(`${this.name} movie hero name kittan. He was playing by kabadi. Movie rating ${this.rating}`);
    },
};
movie.review();

let movie1 = {
    name : "kantara",
    rating : 4,
    available : "amazon prime",
};
let movie2 = {
    name : "Idli kadai",
    rating : 3.5,
    available : "Hot star",
};
let movie3 = {
    name : "dude",
    rating : 3.8,
    available : "Netflix",
};
let movie4 = {
    name : "Aan Paavam Pollathathu",
    rating : 4.3,
    available : "threatre",
};
let movie5 = {
    name : "Bagupali epic",
    rating : 4.8,
    available : "threatre and Hot star",
};

function reviews(myOpinion, Hero) {
    console.log(`Movie name is ${this.name}. The rating of the movie is ${this.rating}. To watch movie it is available in ${this.available}, ${myOpinion}, ${Hero}.`);
}
reviews();
reviews("No movie", "No hero");
reviews.call(movie);
reviews.call(movie1, "Good movie", "Rishab");
reviews.call(movie2, "top notch movie", "Dhanush");
reviews.apply(movie3, ["Worst concept but funny movie", "Pradeep Ranganathan"]);
reviews.apply(movie4, ["Good love and funny movie", "Rio Raj"]);
let bindFun = reviews.bind(movie5, "Epic movie", "Prabash");
bindFun();