import { mainApi } from "./Axios";
// Helper to keep the code DRY 
const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const submitRepoRating = async (repo_id, rating) => {
  const res = await mainApi.post(
    `/ratings/repositories/${repo_id}`,
    { rating },
    getAuthConfig() // this provides the Firebase token
  );
  return res.data;
};