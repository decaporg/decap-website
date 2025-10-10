import React from 'react';

import Markdown from './markdown';

function WidgetDoc({ visible, label, body, html }) {
  if (!visible) {
    return null;
  }

  return (
    <div>
      <h2>{label}</h2>
      <Markdown html={html} body={body} />
    </div>
  );
}

export default WidgetDoc;
