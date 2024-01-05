import { useState, useEffect } from "react";
import dayjs from "dayjs";

const useTimeCounter = (startTime) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElapsedTime(dayjs().diff(startTime, "second"));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [startTime]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return { time: elapsedTime ? formatTime(elapsedTime) : undefined };
};

export default useTimeCounter;
