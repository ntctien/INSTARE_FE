import { createContext, useState } from "react";

const SplashContext = createContext();

const SplashProvider = ({ children }) => {
  const [splash, setSplash] = useState(false);

  return (
    <SplashContext.Provider value={{ splash, setSplash }}>
      {children}
    </SplashContext.Provider>
  );
};

export { SplashProvider, SplashContext };
