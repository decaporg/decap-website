/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Container from '../components/container';
import Page from '../components/page';

function Page404() {
  return (
    <Layout>
      <Helmet>
        <title>404 Not Found | Decap CMS</title>
        <meta name="description" content="This page doesn't exits." />
      </Helmet>
      <Container size="sm">
        <Page as="article">
          <h1>404 Not Found</h1>
          <p>This page doesn't exits.</p>
        </Page>
      </Container>
    </Layout>
  );
}

export default Page404;
