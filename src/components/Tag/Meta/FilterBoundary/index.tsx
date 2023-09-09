/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from "react";
import { ContentFilter } from "./filters";
import useIsBrowser from "@docusaurus/useIsBrowser";

interface FilterBoundaryProps {
  filters: ContentFilter[];
  children?: React.ReactNode;
}

const FilterBoundary: React.FC<FilterBoundaryProps> = ({
  filters = [],
  children,
}) => {
  const isBrowser = useIsBrowser();
  const ref = useRef<HTMLDivElement>(null);
  const [filtered, setFiltered] = useState(false);
  useEffect(() => {
    if (!ref.current || filtered || !isBrowser) return;
    for (const filter of filters) {
      const nodeToErase: Set<ChildNode> = new Set();
      filter.initialize(nodeToErase, ref.current.childNodes);
      for (let i = 0; i < ref.current.childNodes.length; i++) {
        const child = ref.current.childNodes.item(i) as HTMLElement;
        filter.apply(child, i);
      }
      nodeToErase.forEach((node) => node?.remove());
    }
    setFiltered(true);
  }, [ref.current, isBrowser]);
  return <section ref={ref}>{children}</section>;
};

export default FilterBoundary;
