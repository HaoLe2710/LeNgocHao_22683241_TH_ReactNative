const pr1 = Promise.resolve("Le Ngoc Hao")
const pr2 = new Promise(resolve =>{setTimeout(() => resolve(22683241)),3000})
const pr3 = new Promise((resolve) => setTimeout(() =>{resolve("End task")},5000))

Promise.all([pr1,pr2,pr3]).then(result =>{console.log(result)
}).catch(error => {console.log(error);
})