import {useEffect} from "react";

export const useTitle = (
  title = "Create a Free Website | best Online Ecommerce website builder",
) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
