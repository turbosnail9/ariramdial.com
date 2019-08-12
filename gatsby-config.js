module.exports = {
  siteMetadata: {
    title: 'Ari Ramdial',
    author: 'Ari Ramdial',
    siteName: 'ariramdial.com',
    bio:
      'A 🐕-loving,🧗-climbing, 📚-reading entrepreneur',
    siteUrl: 'https://ariramdial.com/',
    github: 'https://github.com/turbosnail9',
    twitter: 'https://twitter.com/ariramdial',
    linkedin: 'https://www.linkedin.com/in/ariramdial/',
    homeCity: 'San Fernando',
    description: 'website about Ari Ramdial',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/uploads`,
        name: 'uploads'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            }
          },
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-53186231-1'
      }
    },
    'gatsby-plugin-feed',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Ari Ramdial',
        short_name: 'ARamdial',
        start_url: '/',
        background_color: '#fffafa',
        theme_color: '#44B',
        display: 'minimal-ui',
        icon: 'content/assets/logo.png',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-purgecss', // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
