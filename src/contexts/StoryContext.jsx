import { createContext, useState } from "react";

const StoryContext = createContext();

const StoryProvider = ({ children }) => {
  const [story, setStory] = useState();
  const [fileName, setFileName] = useState("");

  return (
    <StoryContext.Provider value={{ story, setStory, fileName, setFileName }}>
      {children}
    </StoryContext.Provider>
  );
};

export { StoryProvider, StoryContext };
