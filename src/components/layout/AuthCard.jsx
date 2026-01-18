import React from "react";
import { useNavigate } from "react-router-dom";
import getStarted from "../../assets/getStarted.svg";
import { Github, ArrowRight } from "lucide-react";
const AuthCard = () => {
  const navigate = useNavigate();
  const handleSignIn = () => {
    // later you can add real auth here
    navigate("/home");
  };
  return (
    <div className="bg-white border-2 border-gray-200  rounded-2xl shadow-b shadow-lg p-12 max-w-[41rem] ">
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
        onClick={handleSignIn}
        className="w-full bg-primary hover:bg-hoverd  hover:cursor-pointer text-white py-3  rounded-lg font-medium flex items-center justify-center gap-3 transition mt-25 mb-29 "
      >
        <Github />
        <span>Sign up with GitHub</span>
        <ArrowRight />
      </button>

      <p className="text-xs text-gray-500 text-center mt-4">
        By signing up, you agree to our{" "}
        <span className="font-medium">Terms of Service</span> and{" "}
        <span className="font-medium">Privacy Policy</span>
      </p>
    </div>
  );
};

export default AuthCard;
