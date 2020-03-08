/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Blog built with Gatsby and Graphql',
    author: 'Anchieta'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '753866894669622',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-157282795-1",
        head: true
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              wrapperStyle:
                'border: 5px solid #333; margin-left: 0; margin-right: 0; margin-top: 30px; margin-bottom: 30px;',
              linkImagesToOriginal: false
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            }
          }
        ]
      }
    }
  ],
}
