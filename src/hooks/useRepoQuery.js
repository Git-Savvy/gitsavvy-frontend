import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "../api/repos";
import { fetchRepoById } from "../api/repos";

export const useRepositories = () => {
  return useQuery({
    queryKey: ["repositories"], // The "cache key"
    queryFn: fetchRepositories,
    staleTime: 1000 * 60 * 5, // Keep data fresh for 5 minutes
    cacheTime: 1000 * 60 * 60, // Cache data for 1 hour
  });
};

export const useRepository = (id) => {
  return useQuery({
    queryKey: ["repository", id], // unique per repo
    queryFn: () => fetchRepoById(id),
    enabled: !!id, // don’t run if id is undefined/null
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
  });
};


