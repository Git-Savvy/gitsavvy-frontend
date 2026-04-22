import React from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../../../hooks/useUserContext";
import { useClaimIssue } from "../../../hooks/useContributionQuery";
import { useIssue } from "../../../hooks/useIssueQuery";
import { useToast } from "../../../context/ToastContext";

export default function ClaimView({ onNext }) {
  //issueId is itery issue Number here
  const { repoId, issueId } = useParams();
  const { user } = useUserContext();
  const { showToast } = useToast();

  // 1. Fetching the issue details
  const { data: issue, isLoading: isLoadingIssue } = useIssue(
    Number(repoId),
    Number(issueId),
  );

  // 2. Setup the mutation
  const { mutate, isPending } = useClaimIssue();

  function handleClaim() {
    if (!user) {
      showToast({ message: "Please login first!", type: "error" });
      return;
    }

    // Pass only the issueId as expected by your mutation function
    mutate(issue.id, {
      onSuccess: (data) => {
        // data contains { status: "claimed" } or "already_claimed"
        showToast({
          message:
            data.status === "already_claimed"
              ? "You have already claimed this!"
              : "Issue claimed successfully!",
          type: "success",
        });

        // Move to the next step (Fork)
        onNext();
      },
      onError: (error) => {
        showToast({
          message: error.response?.data?.message || "Something went wrong",
          type: "error",
        });
      },
    });
  }

  // 3. Optional: Logic to see if it's already taken
  const isAlreadyAssigned = issue?.assignees && issue.assignees.length > 0;

  return (
    <div className="space-y-5">
      <p className="text-Gray600 text-sm">
        You're about to claim this issue. Once claimed, other contributors will
        be notified that you're working on it.
      </p>

      <div className="bg-Warning border border-WarningText p-4 rounded-xl">
        <p className="text-sm text-WarningText">
          <span className="font-bold">Note:</span> This will prevent duplicate
          work. Make sure you're ready to start!
        </p>
      </div>

      <button
        disabled={isPending || isLoadingIssue }
        onClick={handleClaim}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
          isPending
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-primary text-white hover:bg-hoverd"
        }`}
      >
        {isPending
          ? "Processing..."
          : isAlreadyAssigned
            ? "Already Assigned"
            : "Claim This Issue"}
      </button>
    </div>
  );
}
