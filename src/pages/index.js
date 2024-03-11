/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';

import Layout from '../components/layout';
import Markdownify from '../components/markdownify';
import PageHero from '../components/page-hero';
import HeroTitle from '../components/hero-title';
import WhatsNew from '../components/whats-new';
import Lead from '../components/lead';
import Features from '../components/features';
// import Awards from '../components/awards';
import HomeSection from '../components/home-section';
import Contributors from '../components/contributors';
import Grid from '../components/grid';
import theme from '../theme';
import { mq } from '../utils';

const MarkdownButton = styled.span`
  a {
    white-space: nowrap;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    font-size: ${theme.fontsize[3]};
    letter-spacing: 0.5px;
    line-height: ${theme.lineHeight[1]};
    background-color: ${theme.colors.primaryLight};
    color: ${theme.colors.white};
    border-radius: ${theme.radii[1]};
    padding: ${theme.space[2]} ${theme.space[3]};
    transition: all 0.2s ease-out;
    text-decoration: none;
    box-shadow: 0;

    &:hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
    }
    &:active {
      box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.5);
    }
  }
`;


function HomePage({ data }) {
  const landing = data.landing.childDataYaml;
  const releases = data.github?.repository?.releases?.nodes || [];

  return (
    <Layout hasPageHero>
      <PageHero>
        <div
          css={css`
            margin-bottom: ${theme.space[7]};
          `}
        >
          <HeroTitle>
            <Markdownify source={landing.hero.headline} />
          </HeroTitle>
          <Lead>
            <Markdownify source={landing.hero.subhead} />
          </Lead>
          <Lead>
            <MarkdownButton>
              <Markdownify source={landing.cta.button} />
            </MarkdownButton>
          </Lead>
        </div>
        <Grid cols={2}>
          <div>
            <Features items={landing.hero.devfeatures} kind="light" />
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
      </PageHero>

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
          <MarkdownButton>
            <Markdownify source={landing.cta.button} />
          </MarkdownButton>
        </div>
      </section>

      <WhatsNew releases={releases} />

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
    github {
      repository(name: "decap-cms", owner: "decaporg") {
        releases(first: 3) {
          nodes {
            publishedAt
            url
            name
            shortDescriptionHTML
          }
        }
      }
    }
    landing: file(relativePath: { regex: "/landing/" }) {
      childDataYaml {
        hero {
          headline
          subhead
          devfeatures {
            feature
            description
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
        cta {
          primary
          primaryhook
          button
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
