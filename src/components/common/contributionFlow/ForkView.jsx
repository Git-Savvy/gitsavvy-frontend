import { GitFork } from "lucide-react";
import { useContext } from "react";
import { IssueContext } from "../../../context/IssueContext";
import { useParams } from "react-router-dom";
import { useToast } from "../../../context/ToastContext";
export default function ({ onNext }) {
  const { issueId } = useParams(); // id from URL
  const { issues, setIssues } = useContext(IssueContext);
  const { showToast } = useToast();
  function handleFork() {
    console.log("handle fork is called");
    showToast({
      message: "Fork is done successfully!",
      type: "success",
      duration: 4000,
    });
  }
  return (
    <div className="space-y-5">
      <div className="bg-Warning border border-WarningText p-5 rounded-xl flex gap-4">
        <GitFork className="text-WarningText shrink-0" size={24} />
        <p className="text-sm text- text-WarningText">
          A fork of cloud-infrastructure will be created in your GitHub account.
          This gives you a personal copy to work with.
        </p>
      </div>
      <button
        onClick={() => {
          handleFork();
          onNext();
        }}
        className="w-full bg-primary text-white hover:bg-hoverd py-4 rounded-xl font-bold text-lg"
      >
        Fork Repository
      </button>
    </div>
  );
}
