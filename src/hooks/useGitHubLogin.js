import { useMutation } from "@tanstack/react-query";
import { syncGitHubUser } from "../api/auth";
import { useUserContext } from "./useUserContext";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../api/user";
import { useToast } from "../context/ToastContext";

export default function useGitHubLogin() {
  const { login } = useUserContext();
  const navigate = useNavigate();
  const { showToast } = useToast();

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
      showToast({
        message: "Login Success",
        type: "success",
        duration: 3000,
      });
      login(fullUser, idToken);
      navigate("/home");
    },
    onError: (err) => {
      // Check for your specific 428 error from FastAPI
      if (err.response?.status === 428) {
        showToast({
          message: "Sync failed: Please try logging in again.",
          type: "error",
          duration: 3000,
        });
      } else if (err.response?.status === 401) {
        showToast({
          message: "Unauthorized: Please try logging in again.",
          type: "error",
          duration: 3000,
        });
      } else {
        console.error("Auth Error:", err.response?.data || err.message);
         showToast({
          message: ("Auth Error:", err.response?.data || err.message),
          type: "error",
          duration: 3000,
        });
      }
    },
  });
}
