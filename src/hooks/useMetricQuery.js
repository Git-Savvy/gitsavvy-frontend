import { fetchMetricsByRepoId } from "../api/metrics";
import { useQuery } from "@tanstack/react-query";

export const useMetricsByRepoId = (repoId) => {
  return useQuery({
    queryKey: ["metrics", repoId], // important: scoped to repo
    queryFn: () => fetchMetricsByRepoId(repoId),
    enabled: !!repoId, // don’t run if repoId (come from parameters) is undefined/null
    staleTime: 1000 * 60 , // 1 minute (metrixs change slowly)
    cacheTime: 1000 * 60 * 60 // 1 hour 
  });
};
