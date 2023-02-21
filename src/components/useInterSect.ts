import React from "react";

export const useInterSect = <T extends Element>(
  ref: React.RefObject<T>,
  callback: (entry: IntersectionObserverEntry) => void,
  once?: boolean
) => {
  React.useEffect(() => {
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
      observer.disconnect();
    };
  }, [ref, callback, once]);

  return null;
};
