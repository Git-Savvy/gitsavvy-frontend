import { fetchDocsByRepoId } from "../api/docs";
import { useQuery } from "@tanstack/react-query";

export const useDocsByRepoId = (repoId) => {
  return useQuery({
    queryKey: ["docs", repoId], // important: scoped to repo
    queryFn: () => fetchDocsByRepoId(repoId),
    enabled: !!repoId, // don’t run if repoId (come from parameters) is undefined/null
    staleTime: 1000 * 60 * 5, // 5 minutes (docs change less often)
    cacheTime: 1000 * 60 *60 * 24, // 24 hours (docs are relatively static)
  });
};
