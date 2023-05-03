import { useEffect, useState } from "react";

const ProgressBar = ({ isRunning, onFilled, value }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isRunning) {
      if (progress < 100) {
        setTimeout(() => setProgress((prev) => prev + 1), 50);
      }
      else {
        onFilled();
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, isRunning]);

  return (
    <div className="flex-1 h-[3px] bg-[#D9D9D980] rounded-sm">
      <div
        style={{ width: `${value !=null ? value : progress}%` }}
        className="h-full bg-grey rounded-sm"
      ></div>
    </div>
  );
};

export default ProgressBar;
