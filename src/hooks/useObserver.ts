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

  const style = ` transform transition-all duration-500 ${
    isVisiable ? " translate-y-0 opacity-100 " : " translate-y-32 opacity-0 "
  }`;

  const callback: IntersectionObserverCallback = useCallback(entries => {
    const [entry] = entries;
    startTransition(() => {
      setVisiable(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }, []);

  const option: IntersectionObserverInit = useMemo(() => {
    return {
      root: null,
      threshold: 0.5,
    };
  }, []);

  const observer = useMemo(
    () => new IntersectionObserver(callback, option),
    [callback, option],
  );

  useEffect(() => {
    const { current } = ref;

    if (current) {
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, [ref]);

  return {
    ref,
    isVisiable,
    style,
  };
};
