import { simulateTask } from "./bai5";

async function runTask() {
  try {
    const result = await simulateTask(500);
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

runTask();
