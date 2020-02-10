module.exports = {
  siteMetadata: {
    siteTitle: `brewOPA`,
    defaultTitle: `brewOPA`,
    siteTitleShort: `brewOPA`,
    siteDescription: `data access control framework built on top of Open Policy Agent`,
    siteUrl: `https://brewopa.org`,
    siteAuthor: `@cyral`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    footer: `Made with 💙& ☕ by Cyral`
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-99997611-9`
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://brewopa.org`
      }
    },
    `gatsby-plugin-offline`
  ]
};
