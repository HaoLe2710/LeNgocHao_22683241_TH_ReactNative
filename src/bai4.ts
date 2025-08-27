function ramdomNumberWithPromise(success: boolean){
    return new Promise<number>((resolve, reject) => {
        if(success) resolve(Math.random())
        else setTimeout(() =>{reject("Something went wrong")},1000)
    })
}

ramdomNumberWithPromise(true).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

ramdomNumberWithPromise(false).then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})

