module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    'gatsby-plugin-eslint',
    `gatsby-plugin-react-next`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    `gatsby-transformer-remark`
  ]
}
