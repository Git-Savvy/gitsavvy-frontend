import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";
import { useCreatePullRequest } from "../../../hooks/useContributionQuery";
import { useContribution } from "../../../context/ContributionContext";

export default function PRView({ onNext, issue }) {
  const { issueId } = useParams();
  const { showToast } = useToast();
  const { branchData } = useContribution(); // Grab from context
  const { setPrData } = useContribution();

  // 1. Local state for PR form
  const [prDetails, setPrDetails] = useState({
    title: `Fix for issue #${issueId}`,
    body: "Implementing the requested changes. Closes #" + issueId,
  });

  // 2. Initialize the mutation
  const { mutate, isPending } = useCreatePullRequest();

  function handlePR() {
    if (!prDetails.title.trim()) {
      showToast({ message: "Please provide a PR title", type: "error" });
      return;
    }

    // 3. Trigger the mutation
    // We pass the issue_id and the body object { title, branch_name, body }
    mutate(
      {
        issue_id: issue.id,
        prData: {
          title: prDetails.title,
          branch_name: branchData?.branch_name || "feature/add-dark-mode", // fallback
          body: prDetails.body,
        },
      },
      {
        onSuccess: (data) => {
          setPrData(data); // Save PR data to context
          console.log(data);
          showToast({
            message: "Pull Request created successfully!",
            type: "success",
            duration: 4000,
          });
          onNext(); // Move to the Complete step
        },
        onError: (error) => {
          const errMsg =
            error.response?.data?.message ||
            "Failed to create PR. Make sure you have pushed your changes and try again.";
          showToast({ message: errMsg, type: "error" });
        },
      },
    );
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-Gray500">
        Create a pull request to submit your changes for review. Include a clear
        description of what you've changed.
      </p>

      {/* Dynamic Info Summary */}
      <div className="border-2 border-Gray200 bg-Gray50 rounded-2xl p-4 space-y-2 bg-background/20">
        <div className="flex justify-between text-sm">
          <span className="text-Gray600 text-sm">Branch:</span>
          <span className="text-primary font-mono font-medium text-sm">
            {branchData?.branch_name || "feature/add-dark-mode"}
          </span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-Gray600">Issue:</span>
          <span className="text-Gray600 font-medium">#{issueId}</span>
        </div>
      </div>

      {/* PR Form Inputs */}
      <div className="space-y-3">
        <div>
          <label className="block text-sm font-bold text-Gray600 mb-1">
            PR Title
          </label>
          <input
            type="text"
            value={prDetails.title}
            onChange={(e) =>
              setPrDetails({ ...prDetails, title: e.target.value })
            }
            className="w-full p-3 bg-background border-2 border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-Gray600 mb-1">
            Description
          </label>
          <textarea
            rows="3"
            value={prDetails.body}
            onChange={(e) =>
              setPrDetails({ ...prDetails, body: e.target.value })
            }
            className="w-full p-3 bg-background border-2 border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
          />
        </div>
      </div>

      <button
        disabled={isPending}
        onClick={handlePR}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          isPending
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary text-white hover:bg-hoverd shadow-lg shadow-primary/10"
        }`}
      >
        {isPending ? "Creating PR..." : "Create Pull Request"}
      </button>
    </div>
  );
}
