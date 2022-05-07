import { useEffect, useMemo, useRef, useState, useTransition } from "react";

export const useObserver = () => {
  const [isVisiable, setVisiable] = useState(false);
  const [, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement | null>(null);

  const style = ` transform transition-all duration-1000 ${
    isVisiable ? " translate-y-0 opacity-100 " : " translate-y-28 opacity-0 "
  }`;

  const observer = useMemo(() => {
    const options = {
      root: null,
    };
    const callback: IntersectionObserverCallback = entries => {
      const [entry] = entries;
      startTransition(() => {
        setVisiable(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
        }
      });
    };
    return new IntersectionObserver(callback, options);
  }, []);

  useEffect(() => {
    if (null === ref.current) return;
    const { current } = ref;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, [ref, observer]);

  return {
    ref,
    isVisiable,
    style,
  };
};
