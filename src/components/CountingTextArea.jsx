import { useState } from "react";

const CountingTextArea = ({ maxLength }) => {
  const [count, setCount] = useState(0);

  const onChange = (value) => {
    setCount(value.length);
  };

  return (
    <div>
      <textarea
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className="h-[80px] resize-none"
      />
      <p className="text-right">
        {count}/{maxLength}
      </p>
    </div>
  );
};

export default CountingTextArea;
