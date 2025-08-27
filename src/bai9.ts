function filterEvenNumberWithPromise(nums: number[]){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           const evenNums = nums.filter(num => num%2 == 0)
           resolve(evenNums)
        },1000)
    })
}

filterEvenNumberWithPromise([1,2,3,4,5]).then(result => console.log(result)).catch(error => console.log(error))