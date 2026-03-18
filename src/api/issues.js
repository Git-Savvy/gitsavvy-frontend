// api/users.js or api/Issues.js
import { mainApi } from "./Axios";

// GET all Issues
export const fetchIssues = async () => {
  const res = await mainApi.get("/issues");
  return res.data.data; // Axios automatically parses the JSON(Lazy loading)
};

// GET a single Issue from a repo by ID
export const fetchIssueById = async (repoId,id) => {
  const res = await mainApi.get(`/issues/${repoId}/${id}`);//The Resource ID Approach, return single object if not found return error 404
  return res.data;
};

// GET Issues by Repository ID
export const fetchIssuesByRepoId = async (repoId) => {
  const res = await mainApi.get(`/issues/${repoId}`);//The Query String Approach..This is a filter. The server looks through a list and picks out matches,rteturn array if no any found return empty
  return res.data.data;
};

// PATCH: Claim an issue by updating its status
export const claimIssue = async (issueId,userId) => {
  const res = await mainApi.patch(`/issues/${issueId}`, {
    issueStatus: "Claimed",
    assignedUserId: userId
  });
  return res.data;
};
