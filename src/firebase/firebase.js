import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
//Firebase Web App
const firebaseConfig = {
  apiKey: "AIzaSyBHCMa1KjYE_eV1qk3mH4U-6x_lNGaQjS0",
  authDomain: "gitsavvy.firebaseapp.com",
  projectId: "gitsavvy",
  appId: "1:144757355132:web:475d364024cae21712cff9",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const githubLogin = async () => {
  const provider = new GithubAuthProvider();

  provider.addScope("read:user");
  provider.addScope("repo");
  const result = await signInWithPopup(auth, provider);
  // ✅ Firebase ID Token
  const idToken = await result.user.getIdToken();
  // ✅ GitHub Access Token
  const credential = GithubAuthProvider.credentialFromResult(result);
  const githubAccessToken = credential?.accessToken;
  return { idToken, githubAccessToken };
};
