import React, { useState } from "react";
import ClaimView from "./ClaimView";
import ForkView from "./ForkView";
import BranchView from "./BranchView";
import ChangesView from "./ChangesView";
import PRView from "./PRView";
import CompleteView from "./CompleteView";
import {
  Check,
  GitFork,
  GitCommitHorizontal,
  GitBranch,
  GitPullRequest,
  X,
  Settings,
} from "lucide-react";
import IssueDetailsCard from "./IssueDetailsCard";

/* --- Step Definitions --- */
const STEPS = [
  { id: "claim", label: "Claim Issue" },
  { id: "fork", label: "Fork Repository" },
  { id: "branch", label: "Create Branch" },
  { id: "changes", label: "Make Changes" },
  { id: "pr", label: "Create PR" },
  { id: "complete", label: "Complete" },
];

/* Map step IDs to icons */
const STEP_ICONS = {
  claim: Settings,
  fork: GitFork,
  branch: GitBranch,
  changes: GitCommitHorizontal,
  pr: GitPullRequest,
  complete: Check,
};

export default function ContributionWorkflow({ isOpen, onClose, issue }) {
  const [currentStep, setCurrentStep] = useState(0);
  
   
  if (!isOpen) return null; // Don't render if modal is closed

  /* Function to go to next step */
  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  //prev is the previous/current value of currentStep.
  //Using a function ensures we always get the latest value of currentStep, even if updates happen quickly
  //STEPS.length - 1 is the index for last step, we use min to insure that we never goes beyond the last step.

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 p-6">
      {/* Backdrop: this div make the blur bg  and make sure to close the modal as it's pressed */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-[590px]  max-h-[80vh] bg-white rounded-3xl shadow-2xl py-4  transition-all duration-200">
        {/* Header */}
        <div className="p-8 pb-4 ">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-Gray400 hover:text-Gray600"
          >
            <X size={24} />
          </button>

          <h2 className="text-[26px] font-bold text-textdark leading-tight">
            Contribution Workflow
          </h2>
          <p className="text-Gray400 mt-1">
            {`Follow these steps to contribute to ${issue.issueTitle}`}
          </p>
        </div>

        {/* Stepper Header */}
        <div className="px-6 py-6 flex items-center justify-between relative border-b-2  border-NavBorder mb-2">
          {STEPS.map((step, index) => {
            const Icon = STEP_ICONS[step.id];
            return (
              <div
                key={step.id}
                className="z-10 mt-2 flex flex-col items-center  flex-1 h-[90px]"
              >
                {/* this div is the circle*/}
                <div
                  className={`w-10 h-10  rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${
                    index < currentStep
                      ? "bg-Cyan50 border-Teal400 text-Teal400"
                      : index == currentStep
                        ? "bg-primaryLableBg border-primary text-primary"
                        : "bg-white border-Gray200 text-Stale400"
                  }`}
                >
                  {/* Show check if step completed, else show icon */}
                  {index < currentStep ? (
                    <Check size={20} />
                  ) : Icon ? (
                    <Icon size={20} />
                  ) : (
                    <div className="text-sm font-bold">{index + 1}</div>
                  )}
                </div>

                {/* Step label with line breaks (“Split the text whenever there is a space.”)*/}
                <span className="text-[10px] mt-2 font-semibold text-Gray00 text-center uppercase tracking-tight">
                  {step.label.split(" ").map((word, idx) => (
                    <React.Fragment key={idx}>
                      {/*( React.Fragment) It lets us group elements without adding HTML tags. */}
                      {word}
                      <br />
                    </React.Fragment>
                  ))}
                </span>
              </div>
            );
          })}

          {/* Progress Line */}
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-Gray200 z-0" />
        </div>

        {/* Content Body */}
        <div className=" relative w-full max-w-[580px] h-[40vh] rounded-3xl transition-all duration-200">
          <div className="overflow-y-auto h-full">
            <div className="px-10 pb-8 space-y-6 mt-2">
              {/* Issue Details Card */}
              <IssueDetailsCard issue={issue} />
            </div>

            {/* Step Views */}
            <div className="space-y-4 px-10 ">
              {currentStep === 0 && (
                <ClaimView onNext={nextStep} />
              )}
              {currentStep === 1 && (
                <ForkView onNext={nextStep} issue={issue} />
              )}
              {currentStep === 2 && (
                <BranchView onNext={nextStep} issue={issue} />
              )}
              {currentStep === 3 && (
                <ChangesView onNext={nextStep} issue={issue}/>
              )}
              {currentStep === 4 && <PRView onNext={nextStep} issue={issue}/>}
              {currentStep === 5 && (
                <CompleteView onNext={onClose} issue={issue} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------- STEP VIEWS ------------------- */
/* 1. Claim Issue */
/* 2. Fork Repository */
/* 3. Create Branch */
/* 4. Make Changes */
/* 5. Create Pull Request */
/* 6. Complete */
