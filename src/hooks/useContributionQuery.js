import { useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  claimIssue, 
  forkRepository, 
  createBranch, 
  createPullRequest ,fetchClaimStatus, unclaimIssue 
} from "../api/contribution"; 

import { useQuery } from "@tanstack/react-query";


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


//6) Fetch Claim Status Query

export const useClaimStatus = (issueId) => {
  return useQuery({
    queryKey: ["claim-status", issueId],
    queryFn: () => fetchClaimStatus(issueId),
    enabled: !!issueId, // لا يعمل إلا إذا وجد ID
    refetchOnWindowFocus: true, // لتحديث الحالة فور عودة المستخدم للمتصفح
  });
};


// 7) Unclaim Issue Mutation
export const useUnclaimIssue = () => {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn receives issueId from the call site: mutate(issueId)
    mutationFn: (issueId) => unclaimIssue(issueId),
    
    // onSuccess receives (data, variables, context)
    // 'variables' here is the issueId you passed to the mutation
    onSuccess: (data, issueId) => {
      // 1. Manually set the cached status to 'unclaimed' for instant UI update
      queryClient.setQueryData(["claim-status", issueId], {
        claim_status: "unclaimed",
        can_claim: true,
        claimed_by_current_user: false,
        claimed_by_other_user: false,
        claimed_by_username: null,
      });

      // 2. Invalidate the query to refetch fresh state from server
      queryClient.invalidateQueries(["claim-status", issueId]);
    },
  });
};