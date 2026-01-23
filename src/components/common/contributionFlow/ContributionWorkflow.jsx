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

export default function ContributionWorkflow({ isOpen, onClose }) {
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
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>

          <h2 className="text-[26px] font-bold text-gray-900 leading-tight">
            Contribution Workflow
          </h2>
          <p className="text-gray-500 mt-1">
            Follow these steps to contribute to cloud-infrastructure
          </p>
        </div>

        {/* Stepper Header */}
        <div className="px-6 py-6 flex items-center justify-between relative">
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
                      ? "bg-[#E8F8F0] border-[#4ADE80] text-[#16A34A]"
                      : index == currentStep
                        ? "bg-primaryLableBg border-primary text-primary"
                        : "bg-white border-gray-100 text-gray-300"
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
                <span className="text-[10px] mt-2 font-semibold text-gray-500 text-center uppercase tracking-tight">
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
          <div className="absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gray-100 z-0" />
        </div>

        {/* Content Body */}
        <div className=" relative w-full max-w-[580px] h-[40vh] rounded-3xl transition-all duration-200">
          <div className="overflow-y-auto h-full">
            <div className="px-10 pb-8 space-y-6 mt-2">
              {/* Issue Details Card */}
              <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-gray-800">
                  Add dark mode support
                </h3>
                <p className="text-gray-500 text-[15px] mt-3 leading-relaxed">
                  Implement dark mode theme switching with system preference
                  detection. This should include proper color scheme management
                  and localStorage persistence.
                </p>
                <div className="flex gap-2 mt-5">
                  <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-[13px] rounded-xl">
                    enhancement
                  </span>
                  <span className="px-4 py-1.5 bg-gray-50 border border-gray-200 text-gray-600 text-[13px] rounded-xl">
                    good first issue
                  </span>
                </div>
              </div>
            </div>

            {/* Step Views */}
            <div className="space-y-4 px-10 ">
              {currentStep === 0 && <ClaimView onNext={nextStep} />}
              {currentStep === 1 && <ForkView onNext={nextStep} />}
              {currentStep === 2 && <BranchView onNext={nextStep} />}
              {currentStep === 3 && <ChangesView onNext={nextStep} />}
              {currentStep === 4 && <PRView onNext={nextStep} />}
              {currentStep === 5 && <CompleteView onNext={onClose} />}
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
