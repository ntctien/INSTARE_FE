import { createContext, useState } from "react";

const AppMenuContext = createContext();

const AppMenuProvider = ({ children }) => {
  const [newMessage, setNewMessage] = useState(false);

  return (
    <AppMenuContext.Provider value={{ newMessage, setNewMessage }}>
      {children}
    </AppMenuContext.Provider>
  );
};

export { AppMenuProvider, AppMenuContext };
