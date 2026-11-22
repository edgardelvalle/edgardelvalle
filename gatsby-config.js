module.exports = {
  siteMetadata: {
    title: 'Edgar Del Valle',
    description: 'Portfolio of Edgar Del Valle, web developer.',
    siteUrl: 'https://edgardelvalle.com',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    // Unregisters the service worker left by the old gatsby-plugin-offline
    // so returning visitors don't keep seeing a stale cached site.
    'gatsby-plugin-remove-serviceworker',
  ],
};
