import { useState, useCallback, useEffect } from "react";

export const useWindowScrolled = () => {
  const [isScrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 5);
  }, [setScrolled]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return {
    isScrolled,
  };
};
