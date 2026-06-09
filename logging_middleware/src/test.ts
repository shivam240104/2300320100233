import { Log } from "./index";

async function run() {
  await Log(
    "backend",
    "info",
    "service",
    "logger initialized successfully"
  );

  console.log("Done");
}

run();