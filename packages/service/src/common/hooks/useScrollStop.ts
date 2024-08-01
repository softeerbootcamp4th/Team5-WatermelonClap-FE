import { useEffect } from "react";
import type { RefObject } from "react";

type BodyRef = { current: HTMLElement };

export const useScrollStop = (
  shouldStop: boolean,
  ref: BodyRef | RefObject<HTMLElement> = { current: document.body },
) => {
  useEffect(() => {
    const node = ref.current;

    if (node) node.style.overflow = "hidden";

    return () => {
      if (node) node.style.overflow = "unset";
    };
  }, [ref, shouldStop]);
};
