const personal = require("../values/personal");

/** @type {import('@docusaurus/preset-classic').ThemeConfig['navbar']} */
const navbar = {
  title: `${personal.myName}'s Page`,
  hideOnScroll: false,
  logo: {
    alt: `${personal.myName}'s Logo`,
    src: "img/logo.svg",
  },
  items: [
    // {
    //   type: "docSidebar",
    //   sidebarId: "documentsSidebar",
    //   position: "left",
    //   label: "Documents",
    // },
    {
      to: "/docs/category/%EC%9D%B4%EB%A0%A5%EC%84%9C",
      label: "Resume",
      position: "left",
    },
    {
      to: "/docs/category/%EA%B2%BD%EB%A0%A5-%EA%B8%B0%EC%88%A0%EC%84%9C",
      label: "Career Description",
      position: "left",
    },
    // { to: "/blog", label: "Blog", position: "left" },
    {
      type: "localeDropdown",
      position: "right",
    },
    {
      href: personal.github.url,
      label: "GitHub",
      position: "right",
    },
  ],
};

module.exports = navbar;
