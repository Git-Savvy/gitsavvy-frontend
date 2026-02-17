import { api } from "./Axios";
// GET Comments by Issue ID
export const fetchCommentsByIssueId = async (issueId) => {
  const res = await api.get(`/comments?issueId=${issueId}`); //may have many??
  return res.data; //this return an array
};


export const addComment = async (newComment) => {
  const response = await api.post("/comments", newComment);
  return response.data;
};