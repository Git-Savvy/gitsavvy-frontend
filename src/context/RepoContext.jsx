import { createContext, useState } from "react";
const RepoContext = createContext();

function RepoProvider({ children }) {
  const [repos, setRepos] = useState(null);
  return (
    <RepoContext.Provider value={{ repos, setRepos }}>
      {children}
    </RepoContext.Provider>
  );
}

export { RepoProvider, RepoContext };
