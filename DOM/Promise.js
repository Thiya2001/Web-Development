// let myPromise = new Promise((res, rej) => {
//     // return res();
//     // return rej();
//     return rej(100); // res ==> fulfilled return accept; rej ==> Rejected rej have no return.
// });

// console.log(myPromise); //Pending

// (no return) ==> Pending, return res ==> fulfilled and (then) will be execute and finally will execute, anyName = anyValue be executed
// rej ==> rejected and (catch) wil be executed and finally will execute, anyName = anyValue can execute

// myPromise.then((e) => {
//     console.log(e);
//     console.log("I will be executed only on resolve state or fulfilled");
// }).catch((e) => {
//     console.log("I will executed only one rejected state");
// }).finally(() => {
//     console.log("I will be executed either resolve or rejected");
// });

let boyProposal = new Promise((res, rej) => {
    let decision = Math.floor(Math.random() * 2);
    console.log(decision);

    if(decision) {
        res("Chocolate kodupan");
    }
    else {
        rej("Odiruvan");
    }
});

// boyProposal
//     .then((e) => {
//         console.log(e);
//     })
//     .catch((e) => {
//         console.log(e);
//     })
//     .finally((e) => {
//         console.log("Friends treat vaipan");
//     });
//     console.log(boyProposal);

async function abc() { // async using await keyword
    try {
        let value = await boyProposal;
        console.log(value);
    }
    catch(e) {
        console.log(e);
    }
    finally {
        console.log("I will be executed on both cases");
    }
}
abc();