import { useState } from "react";
import { subscribe, unsubscribe } from "../events";
import { useEffectOnce } from "usehooks-ts";

const useScroll = () => {
  const [scroll, setScroll] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    setScroll({
      x: window.scrollX,
      y: window.scrollY,
    });
  };

  useEffectOnce(() => {
    subscribe("scroll", onScroll);
    return () => {
      unsubscribe("scroll", onScroll);
    };
  });

  return scroll;
};

export default useScroll;
