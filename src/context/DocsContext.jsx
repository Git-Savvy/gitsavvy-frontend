import { createContext, useState } from "react";
import mockDocs from "../data/mockDocs";

const DocsContext = createContext();

function DocsProvider({ children }) {
  const [docs, setDocs] = useState(mockDocs);
  return (
    <DocsContext.Provider value={{ docs, setDocs }}>
      {children}
    </DocsContext.Provider>
  );
}

export { DocsProvider, DocsContext };
