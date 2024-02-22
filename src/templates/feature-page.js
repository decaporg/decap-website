import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import { trimStart, trimEnd } from 'lodash';
import { css } from '@emotion/react';

import TwitterMeta from '../components/twitter-meta';
import Layout from '../components/layout';
import Container from '../components/container';
import Page from '../components/page';
import Markdown from '../components/markdown';
import theme from '../theme';

function BlogPost({ data }) {
  const { frontmatter } = data.markdownRemark;
  const { title, description, image, features } = frontmatter;
  const { siteUrl } = data.site.siteMetadata;
  const imageUrl = image && `${trimEnd(siteUrl, '/')}/${trimStart(image, '/')}`;
  const desc = description;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        {desc && <meta name="description" content={desc} />}
        {image && <meta name="image" property="og:image" content={imageUrl} />}
      </Helmet>
      <TwitterMeta title={title} description={desc} image={imageUrl} />
      <Container size="sm">
        <Page as="article">
          <h1>{title}</h1>
          <p>{description}</p>

          {features.map((feature, index) => (
            <div key={index}>
              <h2  css={css`
                margin-top: ${theme.space[3]};
              `}>{feature.title}</h2>
              <Markdown html={feature.description} />
            </div>
          ))}
        </Page>
      </Container>
    </Layout>
  );
}

export default BlogPost;

export const pageQuery = graphql`
  query featurePost($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
        features {
          title
          description
        }
      }
    }
  }
`;
