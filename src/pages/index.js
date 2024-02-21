/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import HomeHero from '../components/home-hero';
import HomeFeatures from '../components/home-features';
import HomeServices from '../components/home-services';
import HomeSection from '../components/home-section';
import theme from '../theme';
import { mq } from '../utils';

function HomePage({ data }) {
  const landing = data.landing.childDataYaml;

  return (
    <Layout hasHomeHero>
      <HomeHero {...landing.hero} />

      <HomeFeatures
        developers={landing.developers}
        templateBanner={landing.templateBanner}
        editors={landing.editors}
      />

      <HomeServices {...landing.services} />

      <div css={css`
        overflow: hidden;
      `}>
        <div css={css`
          border-style: solid;
          border-width: 6vw 100vw 0 0;
          border-color: transparent ${theme.colors.primaryDark} transparent transparent;
          margin-top: ${theme.space[5]};

          ${mq[2]} {
            margin-top: ${theme.space[7]};
          }
        `} />
        <div css={css`
          background: linear-gradient(180deg, ${theme.colors.primaryDark} 0%, ${theme.colors.darkerGray} 100%);
          color: ${theme.colors.white};
          padding: ${theme.space[3]} 0;

          ${mq[2]} {
            padding: ${theme.space[4]} 0;
          }
        `}>
          <HomeSection {...landing.blog} />
          <HomeSection {...landing.community} reverse={true} />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query homeQuery {
    landing: file(relativePath: { regex: "/landing/" }) {
      childDataYaml {
        hero {
          headline
          subhead
          buttons {
            text
            href
            class
          }
        }
        developers {
          title
          id
          link {
            text
            href
          }
          button {
            text
            href
          }
          features {
            title
            description
            image
          }
        }
        templateBanner {
          title
          hook
          button {
            text
            href
          }
        }
        editors {
          title
          id
          link {
            text
            href
          }
          button {
            text
            href
          }
          features {
            title
            description
            image
          }
        }
        awards {
          title
          description
          items {
            title
            href
            image
          }
        }
        services {
          title
          description
          features {
            title
            description
            className
            image
            button {
              href
              text
            }
          }
        }
        blog {
          title
          hook
          text
          image
          button {
            href
            text
          }
        }
        community {
          title
          hook
          text
          image
          button {
            href
            text
          }
        }
      }
    }
  }
`;

export default HomePage;
