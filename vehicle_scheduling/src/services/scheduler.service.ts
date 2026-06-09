import { Log } from "../../../logging_middleware/src";

export async function createSchedule() {

  await Log(
    "backend",
    "debug",
    "service",
    "starting knapsack optimization"
  );

  // optimization code

  await Log(
    "backend",
    "info",
    "service",
    "optimization completed"
  );
}