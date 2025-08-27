export function simulateTask(time:number): Promise<string>{
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(time < 1000) reject("Task fail, time too short")
            else resolve ("Task done")
        },time)
    })
}

simulateTask(3000).then(result => {
    console.log(result);
    
})