import { createContext, useState } from "react";

const StoryContext = createContext();

const StoryProvider = ({ children }) => {
  const [story, setStory] = useState();

  return (
    <StoryContext.Provider value={{story,setStory}}>
      {children}
    </StoryContext.Provider>
  );
};

export { StoryProvider, StoryContext };