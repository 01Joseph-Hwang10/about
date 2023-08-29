import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import { translate } from "@docusaurus/Translate";
import NavbarMobileSidebar from "@theme/Navbar/MobileSidebar";
import styles from "./styles.module.css";
import useScroll from "@site/src/hooks/useScroll";
import { useLocation } from "@docusaurus/router";
import useIsMobile from "@site/src/hooks/useIsMobile";

/**
 *
 * @param {React.ComponentProps<'div'>} props
 * @returns {React.JSX.Element}
 */
function NavbarBackdrop(props) {
  return (
    <div
      role="presentation"
      {...props}
      className={clsx("navbar-sidebar__backdrop", props.className)}
    />
  );
}

/**
 * @description
 * Upon this threshold, the navbar will be filled with a background color.
 * This value only applies when display size is larger than @const mobileWidth.
 */
const navBarFillThreshold = 150;

/**
 *
 * @param {import("@theme/Navbar/Layout").Props} props
 * @returns {React.JSX.Element}
 */
export default function NavbarLayout({ children }) {
  const {
    navbar: { hideOnScroll, style },
  } = useThemeConfig();
  const isMobile = useIsMobile();
  const mobileSidebar = useNavbarMobileSidebar();
  const { navbarRef, isNavbarVisible } = useHideableNavbar(hideOnScroll);
  const { y } = useScroll();
  const location = useLocation();
  const isRoot = location.pathname === "/";
  const backgroundColor = isRoot
    ? y <= (isMobile ? 0 : navBarFillThreshold)
      ? "transparent"
      : "var(--ifm-navbar-background-color)"
    : undefined;
  return (
    <nav
      ref={navbarRef}
      aria-label={translate({
        id: "theme.NavBar.navAriaLabel",
        message: "Main",
        description: "The ARIA label for the main navigation",
      })}
      className={clsx(
        isRoot && "navbar-home",
        isRoot && styles.navbarStyle,
        !isRoot && "navbar",
        !isRoot && "navbar--fixed-top",
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          "navbar--dark": style === "dark",
          "navbar--primary": style === "primary",
          "navbar-sidebar--show": mobileSidebar.shown,
        },
      )}
      style={{
        backgroundColor,
      }}
    >
      {children}
      <NavbarBackdrop onClick={mobileSidebar.toggle} />
      <NavbarMobileSidebar />
    </nav>
  );
}
