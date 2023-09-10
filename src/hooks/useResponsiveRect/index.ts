import React, { useState } from "react";
import { useEffectOnce, useInterval } from "usehooks-ts";
import Rect from "./rectangle";
import { subscribe, unsubscribe } from "@site/src/events";

const useResponsiveRect = (ref: React.MutableRefObject<HTMLDivElement>) => {
  const [rect, setRect] = useState<Rect>(Rect.zero());
  useInterval(
    () => {
      if (!ref) return;
      setRect(Rect.fromElementOffset(ref.current));
    },
    rect.size === 0 ? 500 : null,
  );

  const resetRect = () => {
    setRect(Rect.zero());
  };

  useEffectOnce(() => {
    subscribe("resize", resetRect);
    return () => {
      unsubscribe("resize", resetRect);
    };
  });

  return rect;
};

export default useResponsiveRect;
