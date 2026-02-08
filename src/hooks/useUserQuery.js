import { useMutation } from "@tanstack/react-query";
import { fetchUser, updateUser } from "../api/users";
import { useUserContext } from "../context/UserContext";
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
