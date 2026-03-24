import { mainApi } from "./Axios";

// auth.js
export const syncGitHubUser = async ({ idToken, githubAccessToken }) => {
  return await mainApi.post(
    "/auth/github/sync",
    { github_access_token: githubAccessToken },
    {
      headers: {
        // MUST have the word "Bearer" for FastAPI's HTTPBearer to work
        Authorization: `Bearer ${idToken}`,
      },
    },
  );
};
