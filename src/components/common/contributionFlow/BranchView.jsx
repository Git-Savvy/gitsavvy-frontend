import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";
import { useCreateBranch } from "../../../hooks/useContributionQuery";
import { useContribution } from "../../../context/ContributionContext";

export default function BranchView({ onNext, issue }) {
  const { issueId } = useParams();
  const { showToast } = useToast();
  const { setBranchData, setReachedMCHStep } = useContribution(); // Grab from context

  // 1. State for the user's input
  const [branchName, setBranchName] = useState("feature/issue-" + issueId);

  // 2. Initialize the mutation
  const { mutate, isPending } = useCreateBranch();

  function handleBranch() {
    if (!branchName.trim()) {
      showToast({ message: "Please enter a branch name", type: "error" });
      return;
    }

    // 3. Trigger the mutation with the expected object { issue_id, branch_name }
    mutate(
      { issue_id: issue.id, branch_name: branchName },
      {
        onSuccess: (data) => {
          setBranchData(data);
          showToast({
            message: `Branch "${data.branch_name}" created successfully!`,
            type: "success",
            duration: 4000,
          });
          setReachedMCHStep(true);
          localStorage.setItem("reachedMCHStep", "true");
          onNext(); // Move to the "Make Changes" step
        },
        onError: (error) => {
          const errMsg =
            error.response?.data?.message ||
            "Failed to create branch. Try a different name.";
          showToast({ message: errMsg, type: "error" });
        },
      },
    );
  }

  return (
    <div className="space-y-4">
      <label className="block text-sm font-bold text-Gray600">
        Branch Name
      </label>

      <input
        type="text"
        value={branchName}
        onChange={(e) => setBranchName(e.target.value)}
        placeholder="e.target.feature/add-dark-mode"
        disabled={isPending}
        className="w-full p-4 bg-background border-2 border-primary rounded-xl text-Gray900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
      />

      <p className="text-xs text-Gray600">
        Use a descriptive name like{" "}
        <span className="font-mono text-primary ">"feature/"</span> or{" "}
        <span className="font-mono text-primary">"fix/"</span> prefix.
      </p>
      <p className="text-xs text-Gray600">
        Make sure that the branch name is unique and not already in use.
      </p>

      <button
        disabled={isPending}
        onClick={handleBranch}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          isPending
            ? "bg-gray-300 cursor-wait"
            : "bg-primary text-white hover:bg-hoverd shadow-lg shadow-primary/10"
        }`}
      >
        {isPending ? "Creating Branch..." : "Create Branch"}
      </button>
    </div>
  );
}
