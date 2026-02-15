import { api } from "./Axios";
// GET metrics by Repository ID
export const fetchMetricsByRepoId = async (repoId) => {
  const res = await api.get(`/metrics?repoId=${repoId}`);
   return res.data[0] ?? null; // 👈 extract the single object
};