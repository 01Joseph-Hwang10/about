export const getNavbarHeight = (): number | undefined => {
  return document.querySelector(".navbar, .navbar-home")?.clientHeight;
};
