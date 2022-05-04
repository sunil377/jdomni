import { useEffect, useState } from "react";

export const useShiftFocusToInvaildField = () => {
  const [submitCount, setSubmitCount] = useState(0);
  useEffect(() => {
    if (submitCount > 0) {
      const ele = document.querySelector('[aria-invalid="true"]');
      ele instanceof HTMLInputElement && ele.focus();
    }
  }, [submitCount]);
  return setSubmitCount;
};
