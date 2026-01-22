import { createContext, useState } from "react";
import mockMetrics from "../data/mockMetrics";

const MetricsContext = createContext();

function MetricsProvider({ children }) {
  const [metrics, setMetrics] = useState(mockMetrics);
  return (
    <MetricsContext.Provider value={{ metrics, setMetrics }}>
      {children}
    </MetricsContext.Provider>
  );
}

export { MetricsProvider, MetricsContext };
