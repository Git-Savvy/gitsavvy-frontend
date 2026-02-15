import { useQuery } from "@tanstack/react-query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
//1. useQuery (The Consumer)
//This hook is used to fetch and read data. It is your primary tool for getting information from an API and tracking its status (loading, error, success).
//2. useQueryClient (The Manager)
//This hook gives you access to the QueryClient instance that wraps your entire application. It is used to interact with the cache manually.
import { fetchIssues } from "../api/issues";
import { fetchIssueById } from "../api/issues";
import { fetchIssuesByRepoId } from "../api/issues";
import { claimIssue } from "../api/issues";
import { useToast } from "../context/ToastContext";

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

//1. useQuery is Declarative (Automatic) Dependency-driven
//In your useIssuesByRepo hook, you pass repoId directly because you want the data to fetch automatically as soon as the component loads.
export const useIssuesByRepo = (repoId) => {
  return useQuery({
    queryKey: ["issues", repoId], // important: scoped to repo
    queryFn: () => fetchIssuesByRepoId(repoId),
    enabled: !!repoId, // don’t run if repoId (come from parameters) is undefined/null
    staleTime: 1000 * 30, // 30 seconds (issues change often)
    cacheTime: 1000 * 60 * 5, // 5 minutes
  });
};

//2. useMutation is Imperative (Manual) Event-driven
//Mutations (like your "Claim" function) are different because they are actions triggered by a user.
export const useClaimIssue = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToast();

  return useMutation({
    // 1. The main action: call your PATCH function
    // We pass an object { issueId, userId } to the mutate function
    mutationFn: ({ issueId, userId }) => claimIssue(issueId, userId),

    // 2. What to do after the server responds successfully
    onSuccess: (updatedIssue) => {
      // "Invalidate" tells React Query that the old data is now "trash"
      // It forces a refetch so the UI shows "Claimed" automatically
      queryClient.invalidateQueries({ queryKey: ["issues",Number(updatedIssue.repositoryId)] });

      // Optional: Also update the specific detail view if you're on that page
      queryClient.invalidateQueries({ queryKey: ["issue", Number(updatedIssue.id)] });

      showToast({
        message: "Issue claimed successfully!",
        type: "success",
        duration: 4000,
      });
    },

    // 3. What to do if the server fails (e.g., 404 or network error)
    onError: (error) => {
      console.error("Failed to claim issue:", error.message);
    },
  });
};
