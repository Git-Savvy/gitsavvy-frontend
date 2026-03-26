import React from "react";
import { useNavigate } from "react-router-dom";
import getStarted from "../../assets/getStarted.svg";
import { Github, ArrowRight } from "lucide-react";
import { githubLogin } from "../../firebase/firebase";
import useGitHubLogin from "../../hooks/useGitHubLogin";

// import { LoginForm } from "../../pages/LoginForm";
export default function AuthCard() {
  const { mutate, isPending } = useGitHubLogin();
  const navigate = useNavigate();
  const handleLoginClick = async () => {
    try {
      // 1. Trigger popup IMMEDIATELY on click (Browser is happy)
      const firebaseData = await githubLogin();

      // 2. Pass the tokens to the mutation for backend syncing
      mutate(firebaseData, {
        // onSuccess: () => {
        //   navigate("/home");
        // },

      });

    
    } catch (error) {
      console.error("Popup closed or blocked:", error);
    }
  };

  return (
    <div className="bg-white border-2 border-Gray200  rounded-2xl shadow-b shadow-lg p-12 max-w-[41rem] ">
      <div className="mb-7">
        {" "}
        <img src={getStarted} />{" "}
      </div>

      <h2 className="text-4xl font-normal text-textdark mb-8">
        Welcome to GitSavvy
      </h2>

      <p className="text-text-secondary text-2xl mb-10">
        Join thousands of developers making meaningful contributions to
        open-source projects worldwide.
      </p>

      <button
        onClick={handleLoginClick}
        disabled={isPending}
        className="w-full bg-primary hover:bg-hoverd  hover:cursor-pointer text-NavText1 py-3  rounded-lg font-medium flex items-center justify-center gap-3 transition mt-25 mb-29 "
      >
        <Github />
        <span>{isPending ? "Loading..." : "Sign up with GitHub"}</span>
        <ArrowRight />
      </button>

      <p className="text-xs text-Gray600 text-center mt-4">
        By signing up, you agree to our{" "}
        <span className="font-medium">Terms of Service</span> and{" "}
        <span className="font-medium">Privacy Policy</span>
      </p>
    </div>
  );
}
