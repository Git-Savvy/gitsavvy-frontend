import { mainApi } from "./Axios";
import { api } from "./Axios";
// GET Comments by Issue ID
export const fetchCommentsByIssueId = async (repo_id,issue_number) => {
  const res = await mainApi.get(`/issues/${repo_id}/${issue_number}/comments`); //may have many??
  return res.data.comments; //this return an array
};


export const addComment = async (newComment) => {
  const response = await api.post("/comments", newComment);//{{url}}/issues/{{repo_id}}/{{issue_number}}/comments
  return response.data;
};