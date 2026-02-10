import React from "react";
import { AlertCircle } from "lucide-react";

export default function ErrorMessage({ containerStyle, message }) {
  return (
    <div
      className={`${containerStyle} flex flex-col justify-center items-center`}
    >
      {/* Icon with a soft pulse to grab attention gently */}
      <div className="flex justify-center items-center w-[50px] h-[50px] p-3 text-red-500/80 bg-red-400/20 rounded-full">
        <AlertCircle size={32} />
      </div>

      <div>
        <h3 className="text-textdark font-semibold text-xl">Something went wrong</h3>
        <p className="text-Gray400 text-base max-w-[250px] mx-auto">
          {message || "We couldn't load the repositories. Please try again."}
        </p>
      </div>
    </div>
  );
}
