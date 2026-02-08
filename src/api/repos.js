// api/users.js or api/repos.js
import { api } from "./Axios";

// GET all repositories
export const fetchRepositories = async () => {
  const res = await api.get("/repositories");
  return res.data; // Axios automatically parses the JSON
};

// GET a single repository by ID
export const fetchRepoById = async (id) => {
  const res = await api.get(`/repositories/${id}`);
  return res.data;
};