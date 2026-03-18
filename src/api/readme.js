import { mainApi } from "./Axios";
// GET Readme by Repository ID
export const fetchReadmeByRepoId = async (repoId) => {
  const res = await mainApi.get(`/repositories/${repoId}/README`); //may have many??
  return res.data.readme;
};
