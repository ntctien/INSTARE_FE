import React from "react";
import StoryItem from "./StoryItem";
import { useNavigate } from "react-router-dom";

const StoryItems = ({ stories, loading }) => {
  const navigate = useNavigate();

  return stories.map((story, i) => (
    <StoryItem
      key={i}
      self={i === 0}
      read={story?.read ? story.read : true}
      containStories={story?.containStories}
      story={story}
      loading={loading}
      onClick={() => {
        if (!(i === 0 && !story?.containStories))
          navigate("/stories", { state: { stories, currIndex: i } });
      }}
    />
  ));
};

export default StoryItems;
