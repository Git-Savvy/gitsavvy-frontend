import { useUserContext } from "../../../context/UserContext";
import { useClaimIssue } from "../../../hooks/useIssueQuery";
import { useIssue } from "../../../hooks/useIssueQuery";
import { useParams } from "react-router-dom";
export default function ClimView({ onNext }) {
  const { issueId } = useParams(); // id from URL
  const { user } = useUserContext();
  const { mutate, isPending } = useClaimIssue();
  const { data: issue } = useIssue(Number(issueId));

  function handleClaim() {
    if (!user) {
      alert("Please login first!");
      return;
    }
    // Trigger the mutation
    // You pass onNext here!
    mutate(
      {
        issueId: issue.id,
        userId: user.id,
      },
      {
        onSuccess: () => {
          // This runs AFTER the global onSuccess in your hook
          onNext();
        },
      },
    );
  }

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
        disabled={isPending || issue?.issueStatus === "Claimed"}
        onClick={() => {
          handleClaim();
        }}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Claim This Issue
      </button>
    </div>
  );
}
