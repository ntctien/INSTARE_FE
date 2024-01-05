import React from "react";
import StoryItem from "./StoryItem";
import { useNavigate } from "react-router-dom";

const StoryItems = ({ lives, stories, loading }) => {
  const navigate = useNavigate();

  const getStoryItemProps = (story, i) => ({
    key: i,
    read: story?.read != null ? story.read : true,
    containStories: story?.containStories,
    story: story,
    loading: loading,
    onClick: () => {
      console.log(i);
      if (!(i === 0 && !story?.containStories)) {
        navigate("/stories", {
          state: {
            stories: stories.filter(
              (item, i) => !(i === 0 && !item.containStories)
            ),
            currUserId: story?.id,
          },
        });
      }
    },
  });

  return (
    <>
      <StoryItem self {...getStoryItemProps(stories[0], 0)} />
      {lives?.map((live) => (
        <StoryItem
          key={live.id}
          isLive
          story={live.user}
          onClick={() => {
            navigate(`/live/${live.user.username}`);
          }}
        />
      ))}
      {stories
        .filter((_, i) => i !== 0)
        .map((story, i) => (
          <StoryItem {...getStoryItemProps(story, i + 1)} />
        ))}
    </>
  );
};

export default StoryItems;
