function wait(time: number){
  return new Promise(resolve => setTimeout(resolve, time));
}

async function tripleAfterOneSecond(num: number): Promise<number> {
  await wait(1000); 
  return num * 3;
}

tripleAfterOneSecond(5).then(result => {
  console.log(result); 
});
