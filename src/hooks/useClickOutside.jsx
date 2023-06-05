import { useEffect, useRef } from "react";

const useClickOutside = (onClickOutside) => {
  const clickOutsideRef = useRef(null);

  const handleClickOutside = (e) => {
    if (clickOutsideRef.current && !clickOutsideRef.current.contains(e.target)) {
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

  return {clickOutsideRef};
};

export default useClickOutside;
