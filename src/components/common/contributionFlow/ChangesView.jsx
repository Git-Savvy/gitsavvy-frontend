import React from "react";
import { GitBranch, Clock, CodeXml } from "lucide-react";
import { useToast } from "../../../context/ToastContext";
import { useContribution } from "../../../context/ContributionContext";

export default function ChangesView({ onNext }) {
  const { showToast } = useToast();
  const { branchData } = useContribution(); // Grab from context
  const { forkData } = useContribution(); // Grab from context
  console.log(forkData);
  console.log(branchData);

  // Construct the URL to the user's branch on GitHub
  // Assuming branchData contains { fork_owner, fork_name, branch_name } from the previous step
  const branchUrl = `${forkData.fork_url}/tree/${branchData.branch_name}`;
  function handleContinue() {
    showToast({
      message: "Ready to create your Pull Request!",
      type: "success",
      duration: 3000,
    });
    onNext();
  }

  return (
    <div className="space-y-4">
      {/* GitHub Instruction Card */}
      <div className="bg-white border-2 border-Gray200 p-5 rounded-2xl">
        <h4 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
          <CodeXml size={18} /> Edit in Code Editor
        </h4>
        <p className="text-sm text-text-secondary mb-4">
          Check your branch on GitHub, make your code changes, and commit them.
          Once you've pushed your commits, come back here to submit your work.
        </p>
        <a
          href={branchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-Gray200 text-indigo-700 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
        >
          Open GitHub Branch
        </a>
      </div>

      {/* Visual Commit Activity Placeholder */}
      <div className="border-2 border-Gray200 rounded-2xl overflow-hidden bg-white">
        <div className="p-4 border-b border-Gray200 flex justify-between items-center">
          <span className="font-bold text-indigo-900 text-sm">
            Branch Status
          </span>
          <span className=" px-3 py-1 rounded-lg text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
            {branchData.branch_name}"
          </span>
        </div>

        <div className="p-8 text-center">
          <div className="flex justify-center mb-3 text-Gray300">
            <GitBranch size={40} />
          </div>
          <p className="text-sm text-Gray500 max-w-[200px] mx-auto">
            Make your commits then submit your final Pull
            Request.
          </p>
        </div>

        <button
          onClick={handleContinue}
          className="w-[calc(100%-2rem)] mx-4 mb-4 bg-primary text-white hover:bg-hoverd py-4 font-bold text-lg rounded-xl transition-all shadow-md active:scale-[0.98]"
        >
          Continue to Pull Request
        </button>
      </div>
    </div>
  );
}
