import React, { RefObject, useState } from "react";

export const UseInterSect = (
  ref: RefObject<HTMLDivElement>,
  callback: (entries: IntersectionObserverEntry) => void
) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  console.log("useOnScreen");
  React.useEffect(() => {
    console.log("useEffect");
    const observer = new IntersectionObserver(([entry]) => {
      callback(entry);
      setEntry(entry);
    });
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      console.log("unobserve");
      observer.unobserve(ref.current!);
    };
  }, []);

  return entry;
};
