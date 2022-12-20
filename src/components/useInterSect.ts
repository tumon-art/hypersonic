import React from "react";

export const useInterSect = <T extends Element>(
  ref: React.RefObject<T>,
  callback: (entry: IntersectionObserverEntry) => void,
  once?: boolean
) => {
  console.log("useOnScreen");
  React.useEffect(() => {
    console.log("useEffect");
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry);
      if (once == true) {
        if (entry.isIntersecting) observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      console.log("unobserve");
      observer.disconnect();
    };
  }, [ref, callback, once]);

  return null;
};
