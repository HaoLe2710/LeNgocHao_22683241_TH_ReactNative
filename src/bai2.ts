function promiseWithNumber(){
    return new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(10)
        },1000)
    })
}

promiseWithNumber().then((result) =>{
    console.log(result);
    
})



