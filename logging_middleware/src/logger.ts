

import axios from "axios";
import dotenv from "dotenv";
import { Stack, Level, Package } from "./types";

dotenv.config();

const LOG_API =
  "http://4.224.186.213/evaluation-service/logs";

export async function Log(
  stack: Stack,
  level: Level,
  packageName: Package,
  message: string
): Promise<void> {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );
  } catch (error) {
    console.error("Logging Failed:", error);
  }
}