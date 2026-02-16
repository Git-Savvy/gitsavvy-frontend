import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUser, updateUser } from "../api/users";
import { useUserContext } from "../hooks/useUserContext";
import { useNavigate } from "react-router-dom";
export const useUserLogin = () => {
  const { login } = useUserContext();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: fetchUser,
    onSuccess: (user) => {
      login(user); // save user in context
      navigate("/home"); // redirect
    },
    onError: (error) => {
      alert(error.message);
    },
  });
};
// We use useMutation because login is a one-time action, not continuous fetching.
// useQuery is for continuous/fetch-on-mount data; useMutation is for actions like login, form submission, etc.
export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUser,
  });
};


export const useUpdatePreferences = () => {
  const queryClient = useQueryClient();
  const { setUser } = useUserContext();

  return useMutation({
    // We send the full updated user object to the server
    mutationFn: (updatedUser) => updateUser(updatedUser.id, updatedUser),
    
    onSuccess: (updatedUser) => {
      // 1. Update the React Query cache
      queryClient.setQueryData(["user", updatedUser.id], updatedUser);
      
      // 2. Sync with Local Storage (Critical for your refresh issue!)
      localStorage.setItem("user", JSON.stringify(updatedUser));
      
      // 3. Update the Context State
      setUser(updatedUser);
      
      console.log("Preferences and Storage synced successfully.");
    },
    onError: (error) => {
      console.error("Sync failed:", error.message);
    }
  });
};
