import { fetchReadmeByRepoId } from "../api/readme";
import { useQuery } from "@tanstack/react-query";

export const useReadmeByRepoId = (repoId) => {
  return useQuery({
    queryKey: ["Readme", repoId], // important: scoped to repo
    queryFn: () => fetchReadmeByRepoId(repoId),
    enabled: !!repoId, // don’t run if repoId (come from parameters) is undefined/null
    staleTime: 1000 * 60 * 60, // 1 hour (Readme change less often)
    cacheTime: 1000 * 60 * 60 * 24, // 24 hours (Readme are relatively static)
  });
};
