/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Markdownify from '../components/markdownify';
import HomeHero from '../components/home-hero';
// import WhatsNew from '../components/whats-new';
import Lead from '../components/lead';
import Features from '../components/features';
// import Awards from '../components/awards';
import HomeSection from '../components/home-section';
import Contributors from '../components/contributors';
import Grid from '../components/grid';
import Button from '../components/button';
import theme from '../theme';
import { mq } from '../utils';

function HomePage({ data }) {
  const landing = data.landing.childDataYaml;
  // const updates = data.updates.childDataYaml;

  return (
    <Layout hasHomeHero>
      <HomeHero children={landing.hero} />

      <Grid cols={2}>
        <div>
          <Features items={landing.features} kind="light" />
        </div>
        <div>
          <p
            css={css`
              margin-bottom: ${theme.space[2]};
              font-weight: 700;
            `}
          >
            Try it out in the{' '}
            <a href="https://demo.decapcms.org/" target="_blank" rel="noreferrer">
              Decap CMS Demo
            </a>
          </p>
          <a href="https://demo.decapcms.org/" target="_blank" rel="noreferrer">
            <img
              src="/img/screenshot-editor-2.png"
              alt="Screenshot of Decap CMS page editing view"
            />
          </a>
        </div>
      </Grid>

      <section
        css={css`
          background: white;
          ${mq[2]} {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -75%);
            width: 880px;
            border-radius: 8px;
          }
        `}
      >
        <div
          css={css`
            padding: ${theme.space[4]} ${theme.space[5]};
            color: ${theme.colors.lightishGray};
            ${mq[2]} {
              display: flex;
            }
          `}
        >
          <Lead
            css={css`
              margin-right: 2rem;
              font-size: 18px;
              ${mq[2]} {
                margin-bottom: 0;
              }
            `}
          >
            <strong>
              <Markdownify source={landing.cta.primaryhook} />
            </strong>{' '}
            <Markdownify source={landing.cta.primary} />
          </Lead>
          <Button href={landing.cta.button.href}>
          {landing.cta.button.text}
          </Button>
        </div>
      </section>

      {/* Uncomment on when there are some recent updates */}
      {/* <WhatsNew updates={updates.updates} /> */}

      <HomeSection
        css={css`
          background: white;
        `}
        title={<Markdownify source={landing.editors.hook} />}
        text={<Markdownify source={landing.editors.intro} />}
      >
        <Grid cols={3}>
          <Features items={landing.editors.features} />
        </Grid>
      </HomeSection>

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
          <Features items={landing.services?.features} />
        </Grid>
      </HomeSection>

      <HomeSection title={<Markdownify source={landing.community.hook} />}>
        <Grid cols={2}>
          <div>
            <Features items={landing.community.features} />
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
        features {
          feature
          description
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
        cta {
          primary
          primaryhook
          button {
            text
            href
          }
        }
        editors {
          hook
          intro
          features {
            feature
            imgpath
            description
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
