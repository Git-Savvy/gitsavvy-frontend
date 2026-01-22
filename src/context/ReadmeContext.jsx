import { createContext, useState } from "react";
import mockReadmes from "../data/mockReadmes";

const ReadmeContext = createContext();

function ReadmeProvider({ children }) {
  const [readmes, setReadmes] = useState(mockReadmes);
  return (
    <ReadmeContext.Provider value={{ readmes, setReadmes }}>
      {children}
    </ReadmeContext.Provider>
  );
}

export { ReadmeProvider, ReadmeContext };
