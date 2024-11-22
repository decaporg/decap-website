/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Helmet } from 'react-helmet';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Container from '../components/container';
import MetaInfo from '../components/meta-info';
import Page from '../components/page';
import Lead from '../components/lead';
import theme from '../theme';
import Button from '../components/button';

function Blog({ data, pageContext }) {
  const { currentPage, limit, numPages, skip } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
        <meta name="description" content="Recent news and updates about Decap CMS." />
      </Helmet>
      <Page>
        <Container size="sm">
          <h1>Blog</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <article
              key={node.id}
              css={css`
                margin-bottom: ${theme.space[5]};
              `}
            >
              <h2>
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>
              <MetaInfo>
                by {node.frontmatter.author} on {node.frontmatter.date}
              </MetaInfo>
              <Lead>{node.frontmatter.description}</Lead>
            </article>
          ))}
          <div css={css`
            display: flex;
            justify-content: space-between;
          `}>
          {!isFirst && (
            <Button href={`/blog/${prevPage}`} rel="prev" className='primary' css={css`
              margin: ${theme.space[4]} 0;
            `}>
              ← Previous Page
            </Button>
          )}
          {!isLast && (
            <Button href={`/blog/${nextPage}`} rel="next" className='primary' css={css`
              margin: ${theme.space[4]} 0;
            `}>
              Next Page →
            </Button>
          )}
          </div>
        </Container>
      </Page>
    </Layout>
  );
}

export default Blog;

export const pageQuery = graphql`
  query blogList ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/blog/" } } }
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            author
            date(formatString: "MMMM D, YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
