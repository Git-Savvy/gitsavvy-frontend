// api/users.js or api/Issues.js
import { api } from "./Axios";

// GET all Issues
export const fetchIssues = async () => {
  const res = await api.get("/issues");
  return res.data; // Axios automatically parses the JSON(Lazy loading)
};

// GET a single Issues by ID
export const fetchIssueById = async (id) => {
  const res = await api.get(`/issues/${id}`);
  return res.data;
};

// GET Issues by Repository ID
export const fetchIssuesByRepoId = async (repoId) => {
  const res = await api.get(`/issues?repositoryId=${repoId}`);
  return res.data;
};
