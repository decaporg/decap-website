/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useStaticQuery, graphql } from "gatsby"

import Container from './container';
import Release from './release';
import Grid from './grid';
import theme from '../theme';

function WhatsNew() {
  const query = useStaticQuery(graphql`
    query {
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
    }
  `)

  const releases = query.github.repository.releases.nodes;

  return (
    <section css={css`
      background: ${theme.colors.lightestGray};
      padding-top: ${theme.space[7]};
      padding-bottom: ${theme.space[6]};
    `}>
      <Container>
        <h2 css={css`
          margin-bottom: ${theme.space[5]};
          text-align: center;
        `}>Latest Releases</h2>

        <Grid as="ol" cols={3} css={css`
          grid-gap: ${theme.space[5]} !important;
        `}>
          {releases.length > 0 && releases.map((item, idx) => (
            <Release key={idx} {...item} />
          ))}
        </Grid>

        <div css={css`
          text-align: center;
          margin-top: ${theme.space[6]};
        `}>
          <a
            href="https://github.com/decaporg/decap-cms/releases/"
            className="button">
            See all releases on GitHub
          </a>
        </div>
      </Container>
    </section>
  );
}

export default WhatsNew;
