import React from "react";
import SimpleDarkButton from "../SimpleDarkButton";
import SimpleLightButton from "../SimpleLightButton";
import { useUnclaimIssue } from "../../../hooks/useContributionQuery";
import { useToast } from "../../../context/ToastContext";
import { useContribution } from "../../../context/ContributionContext";
export default function ClaimedBanner({ setIsModalOpen, statusData ,issueId}) {
  const { mutate, isPending } = useUnclaimIssue();
  const { showToast } = useToast();
  const{resetContributionData} = useContribution();

  function handleUnclaim() {
    mutate(issueId, {
      onSuccess: (data) => {
        showToast({ message: "Issue unclaimed successfully!", type: "success" });
        setIsModalOpen(false); // Close the modal after unclaiming
        resetContributionData(issueId);
      },
      onError: (error) => {
        showToast({ message: error.response?.data?.message || "Failed to unclaim issue", type: "error" });
      },
    }); 
  }
  return (
    <div className="bg-gradient-to-br from-SCyan to-ECyan border-1 border-NavBorder rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between mb-8">
      <div className="mb-5 md:mb-0">
        <h3 className="text-xl font-semibold text-primary mb-1">
          Issue Already Claimed
        </h3>
        {statusData?.claim_status == "claimed_by_other" && (
          <p className="text-Gray600 text-lg">
            This issue has already been claimed by another contributor. Please
            check other issues.
          </p>
        )}

        {statusData?.claim_status == "claimed_by_you" && (
          <>
            <p className="text-Gray600 text-lg">
              You have already claimed this issue.
            </p>

            <div className=" flex pt-4 gap-4">
              <SimpleDarkButton
                onClick={() => {
                  setIsModalOpen(true);
                }}
                text=" Continue"
              />

              <SimpleLightButton
                onClick={() => {
                 handleUnclaim();
                }}
                text=" Cancel Claim"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
