import { useMutation } from "@tanstack/react-query";
import { syncGitHubUser } from "../api/auth";
import { useUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../api/user";

export default function useGitHubLogin() {
  const { login } = useUserContext();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async ({ idToken, githubAccessToken }) => {
      // STEP 1: Sync (This creates the user in DB)
      console.log("Syncing user...");
      await syncGitHubUser({ idToken, githubAccessToken });

      // STEP 2: Fetch Profile (Now get_current_user won't throw 428)
      console.log("Fetching profile...");
      const fullUser = await fetchUser({ idToken });

      return { fullUser, idToken };
    },
    onSuccess: ({ fullUser, idToken }) => {
      console.log("Login Success:");
      login(fullUser, idToken);
      navigate("/home");
    },
    onError: (err) => {
      // Check for your specific 428 error from FastAPI
      if (err.response?.status === 428) {
        alert("Sync failed: Please try logging in again.");
      } else {
        console.error("Auth Error:", err.response?.data || err.message);
      }
    },
  });
}
