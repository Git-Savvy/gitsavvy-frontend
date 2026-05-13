import React, { useState } from "react";
import { Check } from "lucide-react";
import { useToast } from "../../../context/ToastContext";
import { useContribution } from "../../../context/ContributionContext";
import { useSyncPRStatus } from "../../../hooks/useContributionQuery";
import { useUserContext } from "../../../hooks/useUserContext";
export default function CompleteView({ onClose, issue }) {
  const { showToast } = useToast();
  // Grab the PR data and the reset helper from context
  const { prData, resetContributionData, setCompletedIssue } =
    useContribution();
  const [canComplete, setCanComplete] = useState(false);
  const issue_id = issue.id;
  const { user, setUser } = useUserContext();
  const { mutate: checkPRStatus, isPending, data, error } = useSyncPRStatus();

  const handleRefreshPRStatus = () => {
    checkPRStatus(issue_id, {
      onSuccess: (response) => {
        console.log(response);

        // Determine whether the PR has been merged
        const isMerged = response.status === "merged";
        setCanComplete(isMerged);

        if (isMerged) {
          // Update the user context with the latest points and level
          setUser((prevUser) => ({
            ...prevUser,
            points: response.total_points,
            level: response.level,
            bagdes: response.bagdes,

          }));

          handleDone();
        } else {
          showToast({
            message:
              "Your pull request has not been merged yet. Please wait until it is merged before completing this contribution.",
            type: "info",
            duration: 4000,
          });
        }
      },

      onError: (err) => {
        console.error("Failed to sync PR status:", err);
        showToast({
          message: ("Failed to sync PR status:", err),
          type: "error",
          duration: 4000,
        });
        setCanComplete(false);
      },
    });
  };

  function handleDone() {
    showToast({
      message: "Steps completed successfully!",
      type: "success",
      duration: 4000,
    });
    onClose(); // This will close the modal in ContributionWorkflow
    console.log("Complete");
    setCompletedIssue(true);
  }

  const handleViewPR = () => {
    if (prData?.pr_url) {
      window.open(prData.pr_url, "_blank", "noopener,noreferrer");
    } else {
      showToast({ message: "PR link not found", type: "error" });
    }
  };

  return (
    <div className="text-center py-4 space-y-6">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-Teal400/20 text-Teal400 rounded-full flex items-center justify-center mx-auto">
        <Check size={40} strokeWidth={3} />
      </div>

      {/* Text Content */}
      <div className="space-y-2">
        <h4 className="text-2xl font-bold text-textdark">
          Pull Request Created!
        </h4>
        <p className=" text-textdark px-10">
          Your pull request has been submitted. Maintainers will review your
          changes and provide feedback. Once you receive the merge confirmation
          email, you can click the Done button.
        </p>

        <p className="text-Gray400 px-10 pt-5 text-sm">
          If your pull request is closed without being merged, it means your
          solution was not accepted. In that case, you can either unclaim the
          issue or update your solution and submit a new pull request.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <button
          onClick={handleViewPR}
          className="w-full border border-primary text-primary bg-background hover:bg-hoverl py-3.5 rounded-xl font-bold transition-all active:scale-[0.98]"
        >
          View Pull Request
        </button>

        <button
          onClick={handleRefreshPRStatus}
          className="w-full bg-primary text-NavText1 hover:bg-hoverd py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
        >
          Done
        </button>
      </div>
    </div>
  );
}
