import React, { useState, useEffect, useRef } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import WidgetDoc from './widget-doc';
import Button from './button';
import theme from '../theme';

const WidgetsNav = styled.nav`
  margin: 1rem 0;
`;

const WidgetsContent = styled.div`
`;

function Widgets({ widgets, location }) {
  const initialLoadRef = useRef(true);
  const navRef = useRef(null);
  const [currentWidget, setWidget] = useState(null);

  useEffect(() => {
    const hash = location.hash ? location.hash.replace('#', '') : '';

    const widgetsContainHash = widgets.edges.some(w => w.node.frontmatter.title === hash);

    if (widgetsContainHash) {
      setWidget(hash);
      if (initialLoadRef.current) {
        navRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setWidget(widgets.edges[0].node.frontmatter.title);
    }
    initialLoadRef.current = false;
  }, [widgets, location.hash]);

  function handleWidgetChange(event, title) {
    event.preventDefault();

    setWidget(title);

    window.history.pushState(null, null, `#${title}`);
  }

  return (
    <section>
      <WidgetsNav ref={navRef}>
        {widgets.edges.map(({ node }) => {
          const { label, title } = node.frontmatter;
          return (
            <Button
              key={title}
              active={currentWidget === title}
              onClick={event => handleWidgetChange(event, title)}
              outline
              css={css`
                margin-right: 8px;
                margin-bottom: 8px;
                padding: ${theme.space[2]} ${theme.space[3]} !important;
              `}
            >
              {label}
            </Button>
          );
        })}
      </WidgetsNav>
      <WidgetsContent>
        {widgets.edges.map(({ node }) => {
          const { frontmatter, html } = node;
          const { title, label } = frontmatter;
          const isVisible = currentWidget === title;
          return <WidgetDoc key={label} visible={isVisible} label={label} html={html} />;
        })}
      </WidgetsContent>
    </section>
  );
}

export default Widgets;
