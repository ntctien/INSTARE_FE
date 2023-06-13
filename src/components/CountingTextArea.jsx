import { useState } from "react";

const CountingTextArea = ({ maxLength, name, value, onChange }) => {
  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setCount(e.target.value.length);
    onChange(e);
  };

  return (
    <div>
      <textarea
        name={name}
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        className="h-[80px] resize-none"
      />
      <p className="text-right">
        {count}/{maxLength}
      </p>
    </div>
  );
};

export default CountingTextArea;
