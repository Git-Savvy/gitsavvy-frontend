import React, { createContext, useContext, useState, useEffect } from "react";

const ContributionContext = createContext();

export const ContributionProvider = ({ children }) => {
  const [activeIssueId, setActiveIssueId] = useState(null);

  // Helper to get dynamic keys based on the issue being worked on
  const getIssueKey = (key) =>
    activeIssueId ? `issue_${activeIssueId}_${key}` : null;

  const [currentStep, setCurrentStep] = useState(0);
  const [branchData, setBranchData] = useState(null);
  const [forkData, setForkData] = useState(null);
  const [prData, setPrData] = useState(null);
  const [reachedMCHStep, setReachedMCHStep] = useState(false);

  /**
   * Load data for a specific issue when the modal opens
   */
  const loadIssueData = (issueId) => {
    setActiveIssueId(issueId);

    const step = localStorage.getItem(`issue_${issueId}_currentStep`);
    const branch = localStorage.getItem(`issue_${issueId}_branchData`);
    const fork = localStorage.getItem(`issue_${issueId}_forkData`);
    const pr = localStorage.getItem(`issue_${issueId}_prData`);
    const reached = localStorage.getItem(`issue_${issueId}_reachedMCHStep`);

    setCurrentStep(Number(step) || 0);
    setBranchData(branch ? JSON.parse(branch) : null);
    setForkData(fork ? JSON.parse(fork) : null);
    setPrData(pr ? JSON.parse(pr) : null);
    setReachedMCHStep(reached === "true");
  };

  /**
   * Sync changes to localStorage whenever state updates
   */
  useEffect(() => {
    if (!activeIssueId) return;

    localStorage.setItem(getIssueKey("currentStep"), currentStep.toString());
    localStorage.setItem(getIssueKey("branchData"), JSON.stringify(branchData));
    localStorage.setItem(getIssueKey("forkData"), JSON.stringify(forkData));
    localStorage.setItem(getIssueKey("prData"), JSON.stringify(prData));
    localStorage.setItem(
      getIssueKey("reachedMCHStep"),
      reachedMCHStep.toString(),
    );
  }, [
    currentStep,
    branchData,
    forkData,
    prData,
    reachedMCHStep,
    activeIssueId,
  ]);

  const resetContributionData = (issueId) => {
    const id = issueId || activeIssueId;
    localStorage.removeItem(`issue_${id}_currentStep`);
    localStorage.removeItem(`issue_${id}_branchData`);
    localStorage.removeItem(`issue_${id}_forkData`);
    localStorage.removeItem(`issue_${id}_prData`);
    localStorage.removeItem(`issue_${id}_reachedMCHStep`);

    // Only clear memory if we are currently looking at that issue
    if (id === activeIssueId) {
      setCurrentStep(0);
      setBranchData(null);
      setForkData(null);
      setPrData(null);
      setReachedMCHStep(false);
    }
  };

  return (
    <ContributionContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        branchData,
        setBranchData,
        forkData,
        setForkData,
        prData,
        setPrData,
        reachedMCHStep,
        setReachedMCHStep,
        resetContributionData,
        loadIssueData, // Call this when opening the workflow
      }}
    >
      {children}
    </ContributionContext.Provider>
  );
};

export const useContribution = () => useContext(ContributionContext);
