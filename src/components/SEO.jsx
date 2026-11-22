import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import icon from '../images/icon.png';

const SEO = ({ title }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);
  const { description, siteUrl } = site.siteMetadata;
  const fullTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title;

  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta name="twitter:card" content="summary" />
      <link rel="icon" href={icon} />
    </>
  );
};

export default SEO;
