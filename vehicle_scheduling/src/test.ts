import { createSchedule } from "./services/scheduler.service";

async function run() {
  const result = await createSchedule();

  console.log(result);
}

run();