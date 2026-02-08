import React from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";

export default function ErrorMessage({ message, onRetry, containerStyle }) {
  return (
    <div
      className={`${containerStyle} flex flex-col items-center justify-center text-center gap-3 border-red-100 bg-red-50/30`}
    >
      {/* Icon with a soft pulse to grab attention gently */}
      <div className="p-3 text-red-500/80 bg-red-400/20 rounded-full">
        <AlertCircle size={32} />
      </div>

      <div>
        <h3 className="text-textdark font-semibold">Something went wrong</h3>
        <p className="text-Gray400 text-sm max-w-[250px] mx-auto">
          {message || "We couldn't load the repositories. Please try again."}
        </p>
      </div>


    </div>
  );
}