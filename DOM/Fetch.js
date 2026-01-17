// let data1 = fetch("https://fakestoreapi.com/products");

// console.log(data1);

// data1.then((res) => {
//     // console.log(res);
//     // console.log(res.json());
//     let response1 = res.json();

//     response1.then((data) => {
//         console.log(data);
//     });
// });

// let data2 = fetch("https://api.escuelajs.co/api/v1/products");

// console.log(data2);

// data2.then((res) => {
//     let response2 = res.json();

//     response2.then((data2) => {
//         console.log(data2);
//     });
// });

// let data3 = fetch("https://www.shoppersstack.com/shopping/products/alpha");

// console.log(data3);

// data3.then((res) => {
//     let response3 = res.json();

//     response3.then((e) => {
//         console.log(e);
//     });
// });

// let section = document.querySelector("section");

// async function abc() {
//     let res1 = await fetch("https://fakestoreapi.com/products");
//     let data4 = await res1.json();
//     console.log(data4);
//     data4.forEach((e, i, arr) => {
//         let myHead = document.createElement("h1");
//         myHead.innerHTML = e.title;
//         let myImg = document.createElement("img");

//         myImg.src = e.image;
//         let myPrice = document.createElement("h3");

//         myPrice.innerHTML = `Price  :  RS. ${e.price}`;

//         section.append(myHead, myImg, myPrice);
//     });
// }

// abc();

// async function opq() {
//     let res2 = await fetch("https://api.escuelajs.co/api/v1/products");
//     let data5 = await res2.json();
//     console.log(data5);
// }

// opq();

// async function xyz() {
//     let res3 = await fetch("https://www.shoppersstack.com/shopping/products/alpha");
//     let data6 = await res3.json();
//     console.log(data6);
// }

// xyz();

let getBtn = document.querySelectorAll("button")[0];
let postBtn = document.querySelectorAll("button")[1];
let putBtn = document.querySelectorAll("button")[2];
let delBtn = document.querySelectorAll("button")[3];

console.log(getBtn, postBtn, putBtn, delBtn);

getBtn.addEventListener("click", async () => {
    let res3 = await fetch("https://6929608e9d311cddf34944e7.mockapi.io/Users/5");
    let data = await res3.json();
    console.log(data);
});

postBtn.addEventListener("click", async () => {
    let newUser = {
        name : "Thiyagu"
    }
    let res4 = await fetch("https://6929608e9d311cddf34944e7.mockapi.io/Users/", {
        method : "POST",
        headers : {
            "content-type" : "application/json",
        },
        body : JSON.stringify(newUser),
    });
    let dataSend = await res4.json();
    console.log(dataSend);
});

putBtn.addEventListener("click", async () => {
    let updateData = {
        name : "Thiyagarajan",
        email : "abc@gmail.com,"
    };
    let res5 = await fetch("https://6929608e9d311cddf34944e7.mockapi.io/Users/73", {
        method : "PUT",
        headers : {
            "content-type" : "application/json",
        },
        body : JSON.stringify(updateData),
    });
    let data = await res5.json();
    console.log(data);
});

delBtn.addEventListener("click", async () => {
    let res6 = await fetch("https://6929608e9d311cddf34944e7.mockapi.io/Users/74", {
        method : "delete",
    });
    let dataDel = await res6.json();
    console.log(dataDel);
});