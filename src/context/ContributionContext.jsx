import React, { createContext, useContext, useState } from "react";

const ContributionContext = createContext();

export const ContributionProvider = ({ children }) => {
  const [branchData, setBranchData] = useState(null);
  const [forkData, setForkData] = useState(null);
  const [prData, setPrData] = useState(null);
  // Helper to clear data if the user cancels or finishes
  const resetContribution = () => {
    setBranchData(null);
    setForkData(null);
    setPrData(null);  
  };

  return (
    <ContributionContext.Provider
      value={{
        branchData,
        setBranchData,
        forkData,
        setForkData,
        prData,
        setPrData,
        resetContribution,
      }}
    >
      {children}
    </ContributionContext.Provider>
  );
};

// Custom hook for easy access
export const useContribution = () => {
  const context = useContext(ContributionContext);
  if (!context) {
    throw new Error("useContribution must be used within a ContributionProvider");
  }
  return context;
};