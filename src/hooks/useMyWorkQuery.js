import { useQuery } from "@tanstack/react-query";
import { fetchMyWork} from "../api/myWork";

export const usefetchMyWork = () => {
  return useQuery({
    queryKey: ["MyWork"],
    queryFn: () => fetchMyWork(),
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 15, // 15 minutes
  });
};