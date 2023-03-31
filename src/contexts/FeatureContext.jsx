import { createContext, useState } from "react";

const FeatureContext = createContext();

const FeatureProvider = ({ children }) => {
  const [currFeature, setCurrFeature] = useState("create");

  return (
    <FeatureContext.Provider value={{currFeature,setCurrFeature}}>
      {children}
    </FeatureContext.Provider>
  );
};

export { FeatureProvider, FeatureContext };
