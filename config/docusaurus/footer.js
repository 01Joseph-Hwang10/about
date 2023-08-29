const personal = require("../values/personal");

/** @type {import('@docusaurus/preset-classic').ThemeConfig['footer']} */
const footer = {
  style: "dark",
  links: [
    {
      title: "Docs",
      items: [
        {
          label: "Career Description",
          to: "/docs/category/%EA%B2%BD%EB%A0%A5-%EA%B8%B0%EC%88%A0%EC%84%9C",
        },
        {
          label: "Resume",
          to: "/docs/category/%EC%9D%B4%EB%A0%A5%EC%84%9C",
        },
      ],
    },
    {
      title: "Community",
      items: [
        {
          label: "Stack Overflow",
          href: personal.stackoverflow,
        },
        {
          label: "Leet Code",
          href: personal.leetcode,
        },
        {
          label: "Email",
          href: `mailto:${personal.email}`,
        },
      ],
    },
    {
      title: "More",
      items: [
        {
          label: "Blog",
          to: "/blog",
        },
        {
          label: "GitHub",
          href: personal.github.url,
        },
      ],
    },
  ],
  copyright: `Copyright © ${new Date().getFullYear()} ${
    personal.myName
  }. Built with Docusaurus.`,
};

module.exports = footer;
