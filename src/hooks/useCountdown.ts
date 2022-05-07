import { useState, useEffect } from "react";

export const useCountdown = (length: number) => {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      length - 1 === active ? setActive(0) : setActive(prev => prev + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [active]);

  return {
    active,
    setActive,
  };
};
