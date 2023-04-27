import { useEffect, useRef } from "react";

const useClickOutside = (onClickOutside) => {
  const ref = useRef(null);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {ref};
};

export default useClickOutside;
