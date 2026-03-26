import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUserById, updateUserPref } from "../api/user";
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";

// We use useMutation because login is a one-time action, not continuous fetching.
// useQuery is for continuous/fetch-on-mount data; useMutation is for actions like login, form submission, etc.
// export const useUpdateUser = () => {
//   return useMutation({
//     mutationFn: updateUserPref,
//   });
// };

export const useUpdatePreferences = () => {
  const queryClient = useQueryClient();
  console.log("iam in useUpdared pref in use user query");
  return useMutation({
    // 1. Pass the data as an argument to mutationFn
    mutationFn: (data) => updateUserPref(data),

    onSuccess: (updatedUserPref) => {
      // 2. invalidate the user query here
      // so the UI updates automatically
      queryClient.invalidateQueries({ queryKey: ["user"] });

      console.log("Preferences synced successfully.");
    },
    onError: (error) => {
      console.error("Update failed:", error.message);
    },
  });
};

export const useUserById = (id) => {
  return useQuery({
    queryKey: ["User", id],
    queryFn: () => fetchUserById(id),
    enabled: !!id, // don’t run if id is undefined/null
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 60, // 1 hour
  });
};
