import { useQuery } from "@tanstack/react-query";
import { fetchRepositories } from "../api/repos";

export const useRepositories = () => {
  return useQuery({
    queryKey: ["repositories"], // The "cache key"
    queryFn: fetchRepositories,
    staleTime: 1000 * 60 * 5,    // Keep data fresh for 5 minutes
  });
};

