const siteUrl = process.env.URL || `https://hexcaliber.dev`

module.exports = {
  siteMetadata: {
    title: "Hexcaliber Interactive",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-client-side-redirect",
  ],
};