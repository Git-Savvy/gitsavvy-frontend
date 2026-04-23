import { mainApi } from "./Axios";

// Helper to keep the code DRY (Don't Repeat Yourself)
const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

/**
 * 1) Claim Issue
 * Body: None (passing empty object)
 */
export const claimIssue = async (issue_id) => {
  const res = await mainApi.post(
    `/contributions/issues/${issue_id}/claim`, 
    {}, 
    getAuthConfig()
  );
  return res.data;
};

/**
 * 2) Fork Repository
 * Body: None (passing empty object)
 */
export const forkRepository = async (issue_id) => {
  const res = await mainApi.post(
    `/contributions/issues/${issue_id}/fork`, 
    {}, 
    getAuthConfig()
  );
  return res.data;
};

/**
 * 3) Create Branch
 * Body: { branch_name }
 */
export const createBranch = async (issue_id, branch_name) => {
  const res = await mainApi.post(
    `/contributions/issues/${issue_id}/branch`,
    { branch_name },
    getAuthConfig()
  );
  return res.data;
};

/**
 * 5) Create Pull Request
 * Body: { title, branch_name, body }
 */
export const createPullRequest = async (issue_id, prData) => {
  const res = await mainApi.post(
    `/contributions/issues/${issue_id}/pull-request`,
    prData,
    getAuthConfig()
  );
  return res.data;
};

/**
 * 6) Check claim
 * GET Claim Status
 */
export const fetchClaimStatus = async (issue_id) => {
  const res = await mainApi.get(
    `/contributions/issues/${issue_id}/claim-status`,
    getAuthConfig()
  );
  /* المتوقع من الباكند إرجاع:
    {
      "claim_status": "unclaimed" | "claimed_by_you" | "claimed_by_other",
      "can_claim": boolean,
      "claimed_by_username": string | null
    }
  */
  return res.data;
};


// DELETE Claim
export const unclaimIssue = async (issue_id) => {
  const res = await mainApi.delete(
    `/contributions/issues/${issue_id}/claim`,
    getAuthConfig()
  );
  return res.data;
};
