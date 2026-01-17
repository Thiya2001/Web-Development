let input = document.querySelector("input");
let myHead = document.querySelector("h1");

// input.addEventListener("keydown", () => {
// input.addEventListener("keyup", () => {
// input.addEventListener("keypress", () => {
input.addEventListener("input", () => {
// input.addEventListener("change", () => {
    myHead.innerHTML = input.value;
    console.log(input.value);
});

let para = document.querySelector("p");

para.addEventListener("mouseover", () => {
    para.style.color="red";
});
para.addEventListener("mouseout", () => {
    para.style.color="green";
});