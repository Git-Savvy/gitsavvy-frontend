import { useMutation } from "@tanstack/react-query";
import { githubLogin } from "../firebase/firebase";
import { syncGitHubUser } from "../api/auth";
import { useUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";

// useGitHubLogin.js
export default function useGitHubLogin() {
  const { login } = useUserContext();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async ({ idToken, githubAccessToken }) => {
      // This now only handles the API call to your FastAPI backend
      const response = await syncGitHubUser({ idToken, githubAccessToken });
      return { user: response.data, idToken };
    },
    onSuccess: ({ user, idToken }) => {
      login(user, idToken);
      navigate("/home");
    },
    onError: (err) => {
      console.error(err);
      alert("Backend sync failed");
    },
  });

  return mutation;
}
