import { Vehicle } from "../types/vehical";

export function optimizeSchedule(
  vehicles: Vehicle[],
  maxHours: number
) {
  const n = vehicles.length;

  const dp = Array.from(
    { length: n + 1 },
    () => Array(maxHours + 1).fill(0)
  );

  for (let i = 1; i <= n; i++) {
    const duration = vehicles[i - 1].Duration;
    const impact = vehicles[i - 1].Impact;

    for (let h = 0; h <= maxHours; h++) {
      if (duration <= h) {
        dp[i][h] = Math.max(
          impact + dp[i - 1][h - duration],
          dp[i - 1][h]
        );
      } else {
        dp[i][h] = dp[i - 1][h];
      }
    }
  }

  const selected: Vehicle[] = [];

  let h = maxHours;

  for (let i = n; i > 0; i--) {
    if (dp[i][h] !== dp[i - 1][h]) {
      selected.push(vehicles[i - 1]);
      h -= vehicles[i - 1].Duration;
    }
  }

  return {
    selectedVehicles: selected.reverse(),
    totalImpact: dp[n][maxHours]
  };
}