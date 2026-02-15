import { api } from "./Axios";
// GET Readme by Repository ID
export const fetchReadmeByRepoId = async (repoId) => {
  const res = await api.get(`/readmes?repoId=${repoId}`);//may have many??
   return res.data[0] ?? null; // 👈 extract the single object to get object insted of array with one object inside it
};