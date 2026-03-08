import { mainApi } from "./Axios";
// GET Readme by Repository ID
export const fetchReadmeByRepoId = async (repoId) => {
  const res = await mainApi.get(`/repositories/${repoId}/README`); //may have many??
  console.log(res.data);
  return res.data.readme;
};
