import React from "react";
import { GitFork } from "lucide-react";
import { useParams } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";
import { useForkRepository } from "../../../hooks/useContributionQuery";
import {useContribution} from "../../../context/ContributionContext"
export default function ForkView({ onNext, issue}) {
  const { showToast } = useToast();
  const { setForkData } = useContribution(); // Grab from context
  // 1. Initialize the mutation hook
  const { mutate, isPending } = useForkRepository();

  function handleFork() {
    console.log("handle fork is called for issue:", issue.id );

    // 2. Trigger the mutation
    mutate(issue.id, {
      onSuccess: (data) => {
        setForkData(data); // Save to context;
        showToast({
          message: "Fork created successfully!",
          type: "success",
          duration: 4000,
        });
        
        // You can use data.fork_url or data.fork_name here if needed
        console.log("Fork Data:", data);
        
        onNext(); // Move to Create Branch step
      },
      onError: (error) => {
        // This will help capture that Network Error in the UI
        const errorMessage = error.response?.data?.message || "Connection refused.";
        showToast({
          message: errorMessage,
          type: "error",
          duration: 5000,
        });
      },
    });
  }

  return (
    <div className="space-y-5">
      <div className="bg-Warning border border-WarningText p-5 rounded-xl flex gap-4">
        <GitFork className="text-WarningText shrink-0" size={24} />
        <p className="text-sm text-WarningText">
          A fork of the repository will be created in your GitHub account.
          This gives you a personal copy to work with.
        </p>
      </div>
      
      <button
        disabled={isPending}
        onClick={handleFork}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          isPending 
            ? "bg-gray-300 cursor-wait" 
            : "bg-primary text-white hover:bg-hoverd"
        }`}
      >
        {isPending ? "Forking..." : "Fork Repository"}
      </button>
    </div>
  );
}