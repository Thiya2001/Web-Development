let section = document.querySelector("section");

async function opq() {
    let res2 = await fetch("https://api.escuelajs.co/api/v1/products");
    let data5 = await res2.json();
    console.log(data5);
    data5.forEach((e, i, arr) => {
        let myHead = document.createElement("h1");
        myHead.innerHTML = e.title;
        // let myImg = document.createElement("img");

        // myImg.src = e.images[0];
        let myPrice = document.createElement("h3");

        myPrice.innerHTML = `Price  :  RS. ${e.price}`;

        section.append(myHead, myPrice);
    });
}

opq();