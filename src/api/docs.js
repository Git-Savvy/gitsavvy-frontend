import { api } from "./Axios";
// GET Docs by Repository ID
export const fetchDocsByRepoId = async (repoId) => {
  const res = await api.get(`/docs?repoId=${repoId}`);
   return res.data[0] ?? null; // 👈 extract the single object
};