/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import Page from './page';
import { mq } from '../utils';
import CarbonAds from './carbon-ads';

const Children = styled.div`
  overflow: hidden;
`;

function SidebarLayout({ sidebar, children }) {
  return (
    <Page
      css={css`
        ${mq[1]} {
          display: grid;
          grid-template-columns: ${sidebar ? 'clamp(160px, 20vw, 320px)' : ''} minmax(
              0,
              1fr
            );
          grid-column-gap: 1.5rem;
        }
        ${mq[2]} {
          display: grid;
          grid-template-columns:
            ${sidebar ? 'clamp(160px, 20vw, 320px)' : ''} minmax(0, 1fr)
            clamp(160px, 20vw, 320px);
          grid-column-gap: 2rem;
        }
      `}
    >
      {sidebar && <div>{sidebar}</div>}
      <Children>{children}</Children>
      <CarbonAds />
    </Page>
  );
}

export default SidebarLayout;
