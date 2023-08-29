import React, { useState } from "react";
import useNavbarHeight from "@site/src/hooks/useNavbarHeight";
import values, { Shortcut } from "./values";
import clsx from "clsx";
import events, { subscribe, unsubscribe } from "@site/src/events";
import styles, { PillItem, Pills } from "./styles";
import { useEffectOnce } from "usehooks-ts";

const Shortcuts: React.FC = () => {
  const navbarHeight = useNavbarHeight();
  const [currentSection, setCurrentSection] = useState<Shortcut>(
    values.shortcuts[0],
  );
  const updateCurrentSection = (event: CustomEvent<[Shortcut]>) => {
    const shortcut = event?.detail[0];
    if (!shortcut) return;
    setCurrentSection(shortcut);
  };
  useEffectOnce(() => {
    subscribe(events.shortcuts.sectionChanged, updateCurrentSection);
    return () => {
      unsubscribe(events.shortcuts.sectionChanged, updateCurrentSection);
    };
  });
  return (
    <div className="container" css={styles.container(navbarHeight)}>
      <Pills className="pills pills--block">
        {values.shortcuts.map((shortcut) => (
          <PillItem
            key={`pill_item--${shortcut.replace(" ", "")}`}
            onClick={() =>
              (window.location.href = `#${shortcut.replace(" ", "")}`)
            }
            className={clsx(
              "pills__item",
              currentSection === shortcut.replace(" ", "") &&
                "pills__item--active",
            )}
          >
            {shortcut}
          </PillItem>
        ))}
      </Pills>
    </div>
  );
};

export default Shortcuts;
