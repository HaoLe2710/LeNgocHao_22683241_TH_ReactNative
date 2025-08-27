import { simulateTask } from "./bai5";

async function runTask() {
  const result = await simulateTask(2000);
  console.log(result);  // Output after 2 seconds: "Task done"
}

runTask();
