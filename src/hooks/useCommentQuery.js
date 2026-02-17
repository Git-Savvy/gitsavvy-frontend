import { fetchCommentsByIssueId } from "../api/comments";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { addComment } from "../api/comments";
export const useCommentsByIssueId = (issueId) => {
  return useQuery({
    queryKey: ["comments", issueId], // important: scoped to issue
    queryFn: () => fetchCommentsByIssueId(issueId),
    enabled: !!issueId, // don’t run if issueId (come from parameters) is undefined/null
    staleTime: 1000 * 60 * 5, // 5 minutes (comments change less often)
    cacheTime: 1000 * 60 * 60, // 1 hour
  });
};

export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addComment,

    onSuccess: () => {
      // refetch comments after adding
      queryClient.invalidateQueries(["comments"]);
    },
  });
};
