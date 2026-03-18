import { mainApi } from "./Axios";
// GET metrics by Repository ID
export const fetchMetricsByRepoId = async (repo_Id) => {
  console.log("repoId:", repoId);
  const res = await mainApi.get(`/repositories/${repo_Id}/stats/`);
  console.log("API RESPONSE:", res.data); // 👈 ADD THIS
  return res.data; 
};