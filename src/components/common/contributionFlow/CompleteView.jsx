import React from "react";
import { Check } from "lucide-react";
import { useToast } from "../../../context/ToastContext";
import { useContribution } from "../../../context/ContributionContext"; // Adjust path

export default function CompleteView({ onClose }) {
  const { showToast } = useToast();
  // Grab the PR data and the reset helper from context
  const { prData, resetContributionData } = useContribution();
  console.log(prData);

  function handleDone() {
    showToast({
      message: "Steps completed successfully!",
      type: "success",
      duration: 4000,
    });
    onClose(); // This will close the modal in ContributionWorkflow
    console.log("Complete");
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
        <p className="text-Gray400 px-10">
          Your pull request has been submitted. Maintainers will review your
          changes and provide feedback.
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
          onClick={handleDone}
          className="w-full bg-primary text-NavText1 hover:bg-hoverd py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
        >
          Done
        </button>
      </div>
    </div>
  );
}
