const pr4 = new Promise(resolve => { setTimeout(() => {resolve("Hello")},1000)})
const pr5 = new Promise(resolve => { setTimeout(() => {resolve("That's good"),500})})

Promise.race([pr4,pr5]).then(result => {console.log(result);
}).catch(error =>{ console.log(error);
})
