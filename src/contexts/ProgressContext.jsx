import { createContext, useEffect, useState } from "react";

const ProgressContext = createContext();

const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [progressing, setProgressing] = useState(false);

  useEffect(() => {
    if (progressing) {
      if (progress < 100) {
        setTimeout(() => setProgress((prev) => prev + 5), 10);
      }
    } else {
      setProgress(0);
    }
  }, [progress, progressing]);

  return (
    <ProgressContext.Provider value={{ progress, setProgressing }}>
      {children}
    </ProgressContext.Provider>
  );
};

export { ProgressProvider, ProgressContext };
