/** @jsx jsx */
import { jsx } from '@emotion/react';

import Container from './container';
import Markdown from './markdown';
import MetaInfo from './meta-info';
import Page from './page';

export default function BlogPostTemplate({ title, author, date, body, html }) {
  return (
    <Container size="sm">
      <Page as="article">
        <h1>{title}</h1>

        <MetaInfo>
          by {author} on {date}
        </MetaInfo>

        <Markdown body={body} html={html} />
      </Page>
    </Container>
  );
}
