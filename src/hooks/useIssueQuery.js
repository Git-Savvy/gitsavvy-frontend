import { useQuery } from "@tanstack/react-query";
import { fetchIssues } from "../api/issues";
import { fetchIssueById } from "../api/issues";
import { fetchIssuesByRepoId } from "../api/issues";
export const useIssues = () => {
  return useQuery({
    queryKey: ["issues"], // The "cache key"
    queryFn: fetchIssues,
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
    cacheTime: 1000 * 60 * 60, // Cache data for 1 hour
  });
};

export const useIssue = (id) => {
  return useQuery({
    queryKey: ["issue", id],
    queryFn: () => fetchIssueById(id),
    staleTime: 1000 * 30, // Keep data fresh for 30S
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useIssuesByRepo = (repoId) => {
  return useQuery({
    queryKey: ["issues", repoId], // important: scoped to repo
    queryFn: () => fetchIssuesByRepoId(repoId),
    enabled: !!repoId, // don’t run if repoId (come from parameters) is undefined/null
    staleTime: 1000 * 30, // 30 seconds (issues change often)
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });
};
