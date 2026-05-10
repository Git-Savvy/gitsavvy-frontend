// api/users.js or api/repos.js
import { mainApi } from "./Axios";

// GET all repositories
export const fetchRepositories = async () => {
  const token = localStorage.getItem("token");
  const res = await mainApi.get("/repositories/recommend", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data.data; // Axios automatically parses the JSON
};

export const fetchRepoById = async (repoId) => {
  const res = await mainApi.get(`/repositories/${repoId}`); //only strickly one object
  return res.data.data; // Just return the object directly
};
