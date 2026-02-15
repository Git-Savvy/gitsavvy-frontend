// api/users.js or api/repos.js
import { api } from "./Axios";

// GET all repositories
export const fetchRepositories = async () => {
  const res = await api.get("/repositories");
  return res.data; // Axios automatically parses the JSON
};

export const fetchRepoById = async (id) => {
  const res = await api.get(`/repositories/${id}`);//only strickly one object
  return res.data; // Just return the object directly
};
