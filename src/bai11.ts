function delay(time: number) {
  return new Promise(resolve => setTimeout(resolve, time));
}

async function helloAsync() {
  await delay(2000);
  console.log("Hello Async");
}

helloAsync();
