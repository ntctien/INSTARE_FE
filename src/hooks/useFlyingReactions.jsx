import React, { memo, useEffect, useRef, useState } from "react";
import { REACTION_MAP } from "~/constants/reactions";

const useFlyingReactions = () => {
  const containerRef = useRef(null);
  const [reacts, setReacts] = useState([]);

  const FlyingReaction = memo(({ reaction }) => {
    useEffect(() => {
      const intervalId = setInterval(() => {
        setReacts((prev) =>
          prev.map((react) =>
            react.id === reaction.id ? { ...react, y: react.y + 10 } : react
          )
        );
      }, 16);

      const timeoutId = setTimeout(() => {
        clearInterval(intervalId);
      }, 5000);

      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }, [reaction.id]);

    return (
      <div
        className="absolute"
        style={{
          animationDelay: 0.3 + `s`,
          left: reaction.x,
          bottom: reaction.y,
        }}
      >
        <img
          src={REACTION_MAP[reaction.react].icon}
          alt={REACTION_MAP[reaction.react].name}
          className="w-10"
        />
      </div>
    );
  });

  const startAnimation = (react) => {
    const container = containerRef.current;
    const containerRect = container?.getBoundingClientRect();
    const maxX = containerRect?.width;
    const generatedX = Math.floor(Math.random() * (maxX - 60)) + 30;

    const newReact = {
      id: Date.now(),
      x: generatedX,
      y: 20,
      react,
    };

    setReacts((prev) => [...prev, newReact]);

    // Trigger the animation by setting a timeout
    setTimeout(() => {
      setReacts((prev) => prev.filter((react) => react.id !== newReact.id));
    }, 5000); // Adjust the timeout based on your animation duration
  };

  return { reacts, containerRef, FlyingReaction, startAnimation };
};

export default useFlyingReactions;
