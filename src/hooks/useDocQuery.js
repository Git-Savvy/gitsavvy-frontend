import { useQuery } from "@tanstack/react-query";
import { fetchRepoChildren, fetchDocsByFileId } from "../api/docs";

// ============================================================================
// 1 & 2. Unified Children Hook (Folders & Files)
// This hook works for both the root level and sub-folders.
// ============================================================================
export const useRepoChildren = (repoId, moduleId = null, options = {}) => {
  return useQuery({
    queryKey: ["children", repoId, moduleId],
    queryFn: () => fetchRepoChildren(repoId, moduleId),
    enabled: !!repoId && (options.enabled ?? true),
    staleTime: 1000 * 60 * 5,
  });
};

// ============================================================================
// 3. Documentation Chunks Hook
// ============================================================================
export const useDocsByFileId = (repoId, moduleId, fileId) => {
  return useQuery({
    queryKey: ["docs", repoId, moduleId, fileId],
    queryFn: () => fetchDocsByFileId(repoId, moduleId, fileId),
    // Only run if we have all the IDs required by endpoint structure
    enabled: !!repoId && !!moduleId && !!fileId,
    staleTime: 1000 * 60 * 5,
  });
};
