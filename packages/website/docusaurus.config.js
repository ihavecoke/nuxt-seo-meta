// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "nuxt-seo-meta",
  tagline: "A Nuxt plugin for adding meta tags to your pages",
  url: "https://seo.mixbo.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.jpg",
  organizationName: "ihavecoke", // Usually your GitHub org/user name.
  projectName: "nuxt-seo-meta", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Nuxt SEO Meta",
          src: "img/logo.svg"
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs"
          },
          {
            href: "https://github.com/ihavecoke/nuxt-seo-meta",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      }
    })
}

module.exports = config
