import React from "react";
import {
  Check,
  GitFork,
  GitCommitHorizontal,
  GitBranch,
  GitPullRequest,
  X,
  Settings,
} from "lucide-react";
import { useContribution } from "../../../context/ContributionContext";
import IssueDetailsCard from "./IssueDetailsCard";

// View Imports
import ClaimView from "./ClaimView";
import ForkView from "./ForkView";
import BranchView from "./BranchView";
import ChangesView from "./ChangesView";
import PRView from "./PRView";
import CompleteView from "./CompleteView";

const STEPS = [
  { id: "claim", label: "Claim Issue" },
  { id: "fork", label: "Fork Repository" },
  { id: "branch", label: "Create Branch" },
  { id: "changes", label: "Make Changes" },
  { id: "pr", label: "Create PR" },
  { id: "complete", label: "Complete" },
];

const STEP_ICONS = {
  claim: Settings,
  fork: GitFork,
  branch: GitBranch,
  changes: GitCommitHorizontal,
  pr: GitPullRequest,
  complete: Check,
};

export default function ContributionWorkflow({ isOpen, onClose, issue }) {
  const { currentStep, setCurrentStep, loadIssueData } = useContribution();

  // Load issue-specific data whenever a new issue is opened
  //here used the issue id not numbrt that appear to the user to load the data for that specific issue when the modal opens
  React.useEffect(() => {
    if (isOpen && issue?.id) {
      loadIssueData(issue.id);
    }
  }, [isOpen, issue?.id]);

  if (!isOpen) return null;

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => {
          onClose(); // Call the close function
          window.location.reload(); // Then reload the page
        }}
      />

      <div className="relative w-full max-w-[590px] max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-8 pb-4">
          <button
            onClick={() => {
              onClose(); // Call the close function
              window.location.reload(); // Then reload the page
            }}
            className="absolute top-6 right-6 text-Gray400 hover:text-Gray600"
          >
            <X size={24} />
          </button>
          <h2 className="text-[26px] font-bold text-textdark leading-tight">
            Contribution Workflow
          </h2>
          <p className="text-Gray400 mt-1">
            Follow these steps to contribute to {issue?.issueTitle}
          </p>
        </div>

        {/* Stepper Visualization */}
        <div className="px-6 py-6 flex items-center justify-between relative border-b-2 border-NavBorder">
          {STEPS.map((step, index) => {
            const Icon = STEP_ICONS[step.id];
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div
                key={step.id}
                className="z-10 flex flex-col items-center flex-1 h-[80px]"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${
                    isCompleted
                      ? "bg-Cyan50 border-Teal400 text-Teal400"
                      : isActive
                        ? "bg-primaryLableBg border-primary text-primary"
                        : "bg-white border-Gray200 text-Gray400"
                  }`}
                >
                  {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                </div>
                <span className="text-[10px] mt-2 font-semibold text-center uppercase tracking-tight text-Gray600">
                  {step.label.split(" ").map((w, i) => (
                    <React.Fragment key={i}>
                      {w}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            );
          })}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[1px] bg-Gray200 z-0" />
        </div>

        {/* Dynamic Content Body */}
        <div className="flex-1 overflow-y-auto p-10 pt-6 space-y-6">
          <IssueDetailsCard issue={issue} />

          <div className="transition-all duration-300">
            {currentStep === 0 && <ClaimView onNext={nextStep} />}
            {currentStep === 1 && <ForkView onNext={nextStep} issue={issue} />}
            {currentStep === 2 && (
              <BranchView onNext={nextStep} issue={issue} />
            )}
            {currentStep === 3 && (
              <ChangesView onNext={nextStep} issue={issue} />
            )}
            {currentStep === 4 && <PRView onNext={nextStep} issue={issue} />}
            {currentStep === 5 && (
              <CompleteView onClose={onClose} issue={issue} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
