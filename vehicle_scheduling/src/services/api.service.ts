import axios from "axios";

const BASE_URL =
  "http://4.224.186.213/evaluation-service";

export async function getDepots(token: string) {
  const response = await axios.get(
    `${BASE_URL}/depots`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}

export async function getVehicles(token: string) {
  const response = await axios.get(
    `${BASE_URL}/vehicles`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  return response.data;
}