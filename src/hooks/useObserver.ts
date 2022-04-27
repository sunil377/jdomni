import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";

export const useObserver = () => {
  const [isVisiable, setVisiable] = useState(false);
  const [, startTransition] = useTransition();
  const ref = useRef<HTMLDivElement | null>(null);

  let style = isVisiable
    ? "translate-y-0 opacity-100"
    : "translate-y-32 opacity-0";

  style = style.concat(" transform transition-all duration-500 ");

  const callback: IntersectionObserverCallback = useCallback(entries => {
    const [entry] = entries;
    startTransition(() => {
      setVisiable(entry.isIntersecting);
    });
  }, []);

  const option: IntersectionObserverInit = useMemo(() => {
    return {
      root: null,
      rootMargin: "20px",
      threshold: 0.2,
    };
  }, []);

  useEffect(() => {
    const {current} = ref;
    const observer = new IntersectionObserver(callback, option);
    if (current) {
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, [ref, callback, option]);

  return {
    ref,
    isVisiable,
    style,
  };
};
