import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  claimIssue, 
  forkRepository, 
  createBranch, 
  createPullRequest 
} from "../api/contribution"; 

// 1) Claim Issue Mutation
export const useClaimIssue = () => {
  return useMutation({
    mutationFn: (issue_id) => claimIssue(issue_id),
    onSuccess: (data) => {
      console.log("Issue claimed status:", data.status);
      // Logic: Move to fork step if successful
    },
    onError: (error) => {
      console.error("Claim failed:", error.response?.data?.message || error.message);
    }
  });
};

// 2) Fork Repository Mutation
export const useForkRepository = () => {
  return useMutation({
    mutationFn: (issue_id) => forkRepository(issue_id),
    onSuccess: (data) => {
      // data contains fork_owner, fork_name, fork_url
      console.log("Fork created at:", data.fork_url);
    },
  });
};

// 3) Create Branch Mutation
export const useCreateBranch = () => {
  return useMutation({
    mutationFn: ({ issue_id, branch_name }) => createBranch(issue_id, branch_name),
    onSuccess: (data) => {
      // data contains branch_name, fork_owner, etc.
      console.log("Branch created:", data.branch_name);
    },
  });
};

// 5) Create Pull Request Mutation
export const useCreatePullRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ issue_id, prData }) => createPullRequest(issue_id, prData),
    onSuccess: (data) => {
      // 1. Success message
      console.log("PR Created:", data.pr_url);
      
      // 2. Optional: Invalidate existing work or issues lists 
      // so the UI updates to show the contribution is finished
      queryClient.invalidateQueries(["my-work"]);
    },
  });
};