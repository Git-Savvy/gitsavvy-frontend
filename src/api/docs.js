// docs.js
import { mainApi } from "./Axios";

// ============================================================================
// NEW STEP 1 & 2: Get Children (Modules & Files) 
// ============================================================================
export const fetchRepoChildren = async (repoId, moduleId = null) => {
  // If moduleId is null, we fetch the root children.
  // If moduleId exists, we fetch that specific folder's children.
  const url = moduleId 
    ? `/documentation/${repoId}/modules/${moduleId}/children`
    : `/documentation/${repoId}/children`;

  const res = await mainApi.get(url);

  // The response now contains two keys: "modules" and "files"
  return {
    modules: res.data.modules?.data ?? [],
    files: res.data.files?.data ?? [],
  };

};

// ============================================================================
// STEP 3: Get Documentation Chunks for a specific File
// ============================================================================
export const fetchDocsByFileId = async (repoId, moduleId, fileId) => {
  // Note: Using the new endpoint structure you provided
  const res = await mainApi.get(
    `/documentation/${repoId}/modules/${moduleId}/files/${fileId}/docs`
  );

  return {
    docs: res.data.data ?? [],
  };
};