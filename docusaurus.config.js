// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Theme config: https://docusaurus.io/docs/api/themes/configuration
const {
  themes: { github: lightCodeTheme, dracula: darkCodeTheme },
} = require("prism-react-renderer");

// Custom values.

const personal = {
  myName: "황현규",
  tagline: "Start-up Enthusiast",
  github: {
    url: "https://github.com/01Joseph-Hwang10",
    username: "01Joseph-Hwang10",
    reponame: "01joseph-hwang10.github.io",
  },
  stackoverflow: "https://stackoverflow.com/users/14837031/joseph-hwang",
  leetcode: "https://leetcode.com/01Joseph-Hwang10/",
  email: "hghwang@unist.ac.kr",
};

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
    { to: "/posts", label: "Posts", position: "left" },
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
          label: "Posts",
          to: "/posts",
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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: navbar.title,
  tagline: `Hi, my name is "${personal.myName}" 👋`,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://01joseph-hwang10.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: personal.github.username, // Usually your GitHub org/user name.
  projectName: personal.github.reponame, // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko"],
  },

  customFields: {
    personal,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/posts",
        },
        theme: {
          customCss: require.resolve("./src/style/global.scss"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar,
      footer,
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      metadata: [
        { name: "about:version", content: require("./package.json").version },
      ],
    }),

  plugins: ["docusaurus-plugin-sass"],
  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },
};

module.exports = config;
