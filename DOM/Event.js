// // Accessing HTML elements using different DOM methods

// console.log("------------------------Access DOM element-------------------------");

// let myHead = document.getElementsByTagName("h1")[0];
// console.log(myHead);
// let myAnchor = document.querySelector("a");
// console.log(myAnchor);
// let myInput = document.getElementsByName("user")[0];
// console.log(myInput);

// // Modifying HTML elements by changing their properties

// myHead.innerHTML = "This is modified Heading Text";
// myHead.id = "abc";
// myHead.className = "xyz";
// myHead.title = "This is tool tip";
// myHead.style.color = "blue";
// myHead.style.fontSize = "24px";
// myHead.style.textDecoration = "underline";

// // Modifying input element properties using input

// myInput.type = "password";
// myInput.placeholder = "Enter your password here";
// myInput.maxLength = 5;
// myInput.style.border = "2px solid green";
// myInput.style.padding = "5px";
// myInput.style.fontSize = "16px";
// myInput.style.borderRadius = "4px";

// //modifying anchor element properties

// myAnchor.innerHTML = "This is modified Anchor Text";
// myAnchor.id = "anchorId";
// myAnchor.className = "anchorClass";
// myAnchor.title = "Go to Meesho";
// myAnchor.href = "https://www.meesho.com";
// myAnchor.target = "_blank";
// myAnchor.style.color = "red";
// myAnchor.style.textDecoration = "none";
// myAnchor.style.fontSize = "17px";
// myAnchor.style.fontWeight = "bold";
// myAnchor.style.letterSpacing = "1px";

let myHead1 = document.querySelector("h1");
let myBtn = document.querySelector("button");

myBtn.addEventListener("click", () => {
    console.log(myHead1.innerHTML);

    if(myHead1.innerHTML == "MS DHONI") {
        myHead1.innerHTML = "This is modified Heading Text";
    }
    else {
        myHead1.innerHTML = "MS DHONI";
    }
});

let myInput = document.querySelector("input");
let myBtn1 = document.querySelectorAll("button")[1];

myBtn1.addEventListener("click", () => {
    console.log(myInput.type);

    if(myInput.type === "password") {
        myInput.type = "text";
        myBtn1.innerHTML = "hide";
    }
    else {
        myInput.type = "password";
        myBtn1.innerHTML = "show";
    }
});
