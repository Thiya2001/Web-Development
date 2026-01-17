// getting the elements

let myInput = document.querySelector("input");
let myBtn = document.querySelector("button");
let myUl = document.querySelector("ul");
let storage = [];

console.log(myInput, myBtn, myUl);

// create to add the todo list

myBtn.addEventListener("click", () => {
    if(myInput.value) {
        myUl.innerHTML = "";
        storage.push(myInput.value);

        storage.forEach((e, i, arr) => {
            let listItem = document.createElement("li");
            let span = document.createElement("span");
            span.innerHTML = e;

            let del = document.createElement("button");
            del.innerHTML = "delete";

            del.addEventListener("click", () => {
                storage.splice(i, 1);
                listItem.remove();
            });

            listItem.append(span, del);
            myUl.append(listItem);
        });
        myInput.value = "";
    }
    console.log(storage);
});