import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import { ThemeProvider } from '@emotion/react';

import Header from './header';
import Footer from './footer';
import GlobalStyles from '../global-styles';
import theme from '../theme';

const LAYOUT_QUERY = graphql`
  query layoutQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    footer: file(relativePath: { regex: "/global/" }) {
      childDataYaml {
        footer {
          logo
          maintained
          links {
            text
            href
          }
          socials {
            text
            href
          }
        }
      }
    }
  }
`;

export function LayoutTemplate({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}

function Layout({ hasPageHero, children }) {
  return (
    <StaticQuery query={LAYOUT_QUERY}>
      {data => {
        const { title, description } = data.site.siteMetadata;

        return (
          <LayoutTemplate
            title={title}
            description={description}
            hasPageHero={hasPageHero}
            footerButtons={data.footer.childDataYaml.footer.buttons}
          >
            <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
              <meta name="description" content={description} />
              <meta name="image" property="og:image" content="https://decapcms.org/img/og-image.jpg" />
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
              <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
            </Helmet>
            <Header hasHeroBelow={hasPageHero} />
            {children}
            <Footer {...data.footer.childDataYaml.footer} />
          </LayoutTemplate>
        );
      }}
    </StaticQuery>
  );
}

export default Layout;
