//Global Scope
var a = 100;
console.log(a);

let b = 200;
const c = 300;
console.log(b, c);


//Block Scope
{
    console.log(a, b, c);

    let d = "I am let inside block";
    const e = "I am const inside block";
    var f = "I am var inside the block";
}

// console.log(d);
// console.log(e);
console.log(f);

//function Scope (or) local Scope

function abc() {
    let g = "I am let from function";
    const h = "I am const from function";
    var i = "I am var from function";

    console.log(g, h, i);
}
// console.log(g);
// console.log(h);
// console.log(i);

abc();

