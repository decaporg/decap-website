/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Markdownify from '../components/markdownify';
import HomeHero from '../components/home-hero';
// import WhatsNew from '../components/whats-new';
// import Features from '../components/features';
// import Awards from '../components/awards';
import HomeSection from '../components/home-section';
import Contributors from '../components/contributors';
import Grid from '../components/grid';
import theme from '../theme';
import HomeFeatures from '../components/home-features';

function HomePage({ data }) {
  const landing = data.landing.childDataYaml;
  // const updates = data.updates.childDataYaml;

  return (
    <Layout hasHomeHero>
      <HomeHero {...landing.hero} />

      <HomeFeatures
        developers={landing.developers}
        templateBanner={landing.templateBanner}
        editors={landing.editors}
      />

      {/* Uncomment on when there are some recent updates */}
      {/* <WhatsNew updates={updates.updates} /> */}

      <HomeSection
        css={css`
          background: ${theme.colors.lightestGray};
        `}
        title={
          <>
            <span
              css={css`
                color: ${theme.colors.primaryLight};
                margin-right: ${theme.space[2]};
              `}
            >
              New!
            </span>
            {landing.services?.hook}
          </>
        }
        text={<Markdownify source={landing.services?.intro} />}
      >
        <Grid cols={4}>
          {/* <Features items={landing.services?.features} /> */}
        </Grid>
      </HomeSection>

      <HomeSection title={<Markdownify source={landing.community.hook} />}>
        <Grid cols={2}>
          <div>
            {/* <Features items={landing.community.features} /> */}
          </div>
          <div>
            <h3
              css={css`
                font-size: 18px;
              `}
            >
              {landing.community.contributors}
            </h3>
            <Contributors />
          </div>
        </Grid>
      </HomeSection>

      {/* <HomeSection
        css={css`
          background: white;
        `}
        title={<Markdownify source={landing.awards.title} />}
        text={<Markdownify source={landing.awards.description} />}
      >
        <Awards items={landing.awards.items} />
      </HomeSection> */}
    </Layout>
  );
}

export const pageQuery = graphql`
  query homeQuery {
    updates: file(relativePath: { regex: "/updates/" }) {
      childDataYaml {
        updates {
          date
          description
          version
          url
        }
      }
    }
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
          hook
          intro
          features {
            feature
            description
            cta {
              href
              label
            }
          }
        }
        community {
          hook
          features {
            feature
            description
          }
          contributors
        }
      }
    }
  }
`;

export default HomePage;
