import { get } from "../api";
import config from "../config";

/**
 * Fetches the employees data from the server.
 * @returns {Promise<any>} A promise that resolves to the fetched data.
 */
export const fetchEmployees = async (signal?: AbortSignal) => {
  const { data } = await get(config.employee.fetch, { signal });

  return data.data;
};
