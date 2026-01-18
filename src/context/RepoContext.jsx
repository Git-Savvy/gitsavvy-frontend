import { createContext, useContext, useState } from "react";
import mockRepos from "../data/mockRepos";

const RepoContext = createContext();

function RepoProvider({ children }) {
  const [repos, setRepos] = useState(mockRepos);
  return (
    <RepoContext.Provider value={{ repos, setRepos }}>
      {children}
    </RepoContext.Provider>
  );
}

export { RepoProvider, RepoContext };
