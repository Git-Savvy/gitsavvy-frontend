import { createContext, useState } from "react";
import mockIssues from "../data/mockIssues";

const IssueContext = createContext();

function IssueProvider({ children }) {
  const [issues, setIssues] = useState(mockIssues);
  return (
    <IssueContext.Provider value={{ issues, setIssues }}>
      {children}
    </IssueContext.Provider>
  );
}

export { IssueProvider, IssueContext };
