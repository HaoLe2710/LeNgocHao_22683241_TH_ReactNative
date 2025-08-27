function square(num: number){
    return Promise.resolve(num*num);
}

function double(num: number){
    return Promise.resolve(num*2)
}

function addfive(num: number){
    return Promise.resolve(num + 5)
}

square(2).then(double).then(addfive).then(result =>{console.log(result)}).catch(error => console.log(error))