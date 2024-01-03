import { useLayoutEffect } from "react";

type UseLockScrollHook = {
  active: boolean;
};

export const useLockScroll = ({ active }: UseLockScrollHook) => {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "initial";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [active]);
};
