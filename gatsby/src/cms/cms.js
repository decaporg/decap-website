import React from 'react';
import CMS from 'decap-cms-app';
import dayjs from 'dayjs';
import Prism from 'prismjs';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

import BlogPostTemplate from '../components/blog-post-template';
import { LayoutTemplate as Layout } from '../components/layout';
import DocsTemplate from '../components/docs-template';
import WidgetDoc from '../components/widget-doc';
import Community from '../components/community';
import siteConfig from '../../site.yml';

let emotionCache;
function getEmotionCache() {
  const previewPaneIframe = document.querySelector('iframe[class*="PreviewPaneFrame"]');
  const previewPaneHeadEl = previewPaneIframe.contentWindow.document.querySelector('head');
  if (!emotionCache || emotionCache.sheet.container !== previewPaneHeadEl) {
    emotionCache = createCache({ container: previewPaneHeadEl });
  }
  return emotionCache;
}

function PreviewContainer({ children, highlight }) {
  return (
    <CacheProvider value={getEmotionCache()}>
      <Layout>{highlight ? <Highlight>{children}</Highlight> : children}</Layout>
    </CacheProvider>
  );
}

class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }

  highlight() {
    setTimeout(() => {
      if (this.ref.current) {
        Prism.highlightAllUnder(this.ref.current);
      }
    });
  }

  componentDidMount() {
    this.highlight();
  }

  componentDidUpdate() {
    this.highlight();
  }

  render() {
    return <div ref={this.ref}>{this.props.children}</div>;
  }
}

function BlogPostPreview({ entry, widgetFor }) {
  const data = entry.get('data');
  return (
    <PreviewContainer highlight={true}>
      <BlogPostTemplate
        title={data.get('title')}
        author={data.get('author')}
        date={dayjs(data.get('date')).format('MMMM D, YYYY')}
        body={widgetFor('body')}
      />
    </PreviewContainer>
  );
}

function CommunityPreview({ entry }) {
  const { title, headline, subhead, sections } = entry.get('data').toJS();
  return (
    <PreviewContainer>
      <Community title={title} headline={headline} subhead={subhead} sections={sections} />
    </PreviewContainer>
  );
}

function DocsPreview({ entry, widgetFor }) {
  return (
    <PreviewContainer highlight={true}>
      <DocsTemplate title={entry.getIn(['data', 'title'])} body={widgetFor('body')} />
    </PreviewContainer>
  );
}

function WidgetDocPreview({ entry, widgetFor }) {
  return (
    <PreviewContainer highlight={true}>
      <WidgetDoc visible={true} label={entry.get('label')} body={widgetFor('body')} />
    </PreviewContainer>
  );
}

CMS.registerPreviewTemplate('blog', BlogPostPreview);
siteConfig.menu.docs.forEach(group => {
  CMS.registerPreviewTemplate(`docs_${group.name}`, DocsPreview);
});
CMS.registerPreviewTemplate('widget_docs', WidgetDocPreview);
CMS.registerPreviewTemplate('community', CommunityPreview);
