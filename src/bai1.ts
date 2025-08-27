const helloAsynv = new Promise(resolve =>{
    setTimeout(() => {
        resolve(console.log("Hello Async"))
    },2000)
})