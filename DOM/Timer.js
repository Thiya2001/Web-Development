// let btn = document.querySelector("button");
// console.log("Hi");

// Syntax ==> setTimeout(()=>{}, timer)

// setTimeout(() => {
//     console.log("I am from timer.");
// }, 5000);

// setInterval(() => {
//     console.log("I will be execute again again");
// }, 3000);
// console.log("bye");

let num = 0;

let anyname = setInterval(() => {
    num = num + 1;
    console.log(num);
    if(num == 10) {
        clearInterval(anyname)
    }
}, 1000);

let title = document.querySelector("title");

setInterval(() => {
    if(title.innerHTML == "Vada Chennai") {
        title.innerHTML = "Arasan🔥🔥"; //emoji ==> window + .
    }
    else {
        title.innerHTML = "Vada Chennai";
    }
}, 2000);