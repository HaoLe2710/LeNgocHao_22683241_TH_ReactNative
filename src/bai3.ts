function errorPromise(){
    return new Promise((resolve ,reject) =>{
        setTimeout(() => {
            reject("Something went wrong")
        },1000)
    })
}

errorPromise().then(result => {
    console.log("Success: ", result);
}).catch(error => {
    console.log("Error: " , error);
    
})
