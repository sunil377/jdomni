import { useState, useEffect } from "react";

export const useMatchMedia = ({ query }: useMatchMediaProps) => {
  const [isMatch, setMatch] = useState(true);

  const handleWin = (ev: MediaQueryListEvent) => {
    setMatch(ev.matches);
  };

  useEffect(() => {
    const win = window.matchMedia(query);
    setMatch(win.matches);
    win.addListener(handleWin);
    return () => win.removeListener(handleWin);
  }, []);

  return {
    isMatch,
  };
};

interface useMatchMediaProps {
  query: string;
}
