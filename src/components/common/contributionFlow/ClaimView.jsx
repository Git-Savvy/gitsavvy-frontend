import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { IssueContext } from "../../../context/IssueContext";
import { useParams } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";
export default function ClimView({ onNext }) {
  const { issueId } = useParams(); // id from URL
  const { user } = useContext(UserContext);
  const { issues, setIssues } = useContext(IssueContext);
  const { showToast } = useToast();

  function handleClaim() {
    setIssues(
      (
        issues, //Always update state using the previous state callback.
      ) =>
        issues.map((issue) =>
          issue.issueId === Number(issueId) && !issue.assignedUserId
            ? {
                ...issue,
                assignedUserId: user.id,
                issueStatus: "claimed",
              }
            : issue,
        ),
    );
    showToast({
      message: "Issue claimed successfully!",
      type: "success",
      duration: 4000,
    });
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
        onClick={() => {
          handleClaim();
          onNext();
          console.log("Updated Issue:", issues);
        }}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Claim This Issue
      </button>
    </div>
  );
}
