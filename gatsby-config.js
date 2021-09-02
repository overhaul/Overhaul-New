module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "The New Overhaul New",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `work`,
        path: `${__dirname}/work`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp"
  ],
};
