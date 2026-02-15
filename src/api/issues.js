// api/users.js or api/Issues.js
import { api } from "./Axios";

// GET all Issues
export const fetchIssues = async () => {
  const res = await api.get("/issues");
  return res.data; // Axios automatically parses the JSON(Lazy loading)
};

// GET a single Issues by ID
export const fetchIssueById = async (id) => {
  const res = await api.get(`/issues/${id}`);//The Resource ID Approach, return single object if not found return error 404
  return res.data;
};

// GET Issues by Repository ID
export const fetchIssuesByRepoId = async (repoId) => {
  const res = await api.get(`/issues?repositoryId=${repoId}`);//The Query String Approach..This is a filter. The server looks through a list and picks out matches,rteturn array if no any found return empty
  return res.data;
};

// PATCH: Claim an issue by updating its status
export const claimIssue = async (issueId,userId) => {
  const res = await api.patch(`/issues/${issueId}`, {
    issueStatus: "Claimed",
    assignedUserId: userId
  });
  return res.data;
};
