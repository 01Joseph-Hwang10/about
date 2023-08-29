// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Theme config: https://docusaurus.io/docs/api/themes/configuration
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// Custom values.
const personal = require("./config/values/personal");
const navbar = require("./config/docusaurus/navbar");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: navbar.title,
  tagline: `Hi, my name is "${personal.myName}" 👋`,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://01Jospeh-Hwang10.github.io",
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
      navbar: require("./config/docusaurus/navbar"),
      footer: require("./config/docusaurus/footer"),
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
