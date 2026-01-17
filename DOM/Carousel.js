let myImg = document.querySelector("img");
let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let storage = ["./Images/img1.jpg", "./Images/img2.jpg", "./Images/img3.jpg", "./Images/img4.avif", "./Images/img5.jpg"];

console.log(myImg);
console.log(prev);
console.log(next);

let index = 0;
next.addEventListener("click", () => {
    index++;
    if(index == storage.length) {
        index = 0;
    }
    myImg.src = storage[index];
});

prev.addEventListener("click", () => {
    index--;
    if(index == -1) {
        index = storage.length-1;
    }
    myImg.src = storage[index];
});

setInterval(() => {
    index++;
    if(index == storage.length) {
        index = 0;
    }
    myImg.src = storage[index];
}, 3000);