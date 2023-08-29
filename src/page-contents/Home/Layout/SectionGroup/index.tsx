import events, { dispatch } from "@site/src/events";
import useNavbarHeight from "@site/src/hooks/useNavbarHeight";
import useResponsiveRect from "@site/src/hooks/useResponsiveRect";
import useScroll from "@site/src/hooks/useScroll";
import React, { useEffect, useRef } from "react";
import styles from "./styles";

interface SectionGroupProps {
  id: string;
  children: React.ReactNode;
}

const SectionGroup: React.FC<SectionGroupProps> = ({ id, children }) => {
  const sectionGroupRef = useRef<HTMLDivElement>(null);
  const rect = useResponsiveRect(sectionGroupRef);
  const { y } = useScroll();
  const navbarHeight = useNavbarHeight();

  useEffect(() => {
    if (y >= rect.top - navbarHeight && y < rect.bottom - navbarHeight) {
      dispatch(events.shortcuts.sectionChanged, id);
    }
  }, [y, rect.top, rect.bottom, navbarHeight]);

  return (
    <div id={id} ref={sectionGroupRef} css={styles.sectionGroupRoot}>
      {children}
    </div>
  );
};

export default SectionGroup;
