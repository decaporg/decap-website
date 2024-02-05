/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

import Page from './page';
import { mq } from '../utils';

const Children = styled.div`
  overflow: hidden;
  padding-left: 2rem;
`;

const CarbonPlaceholder = styled.div`
  #carbonads {
    --carbon-font-family: -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
      'Helvetica Neue', Helvetica, Arial, sans-serif;
    --carbon-font-size: 14px;
    --carbon-padding: 1.5ch;
    --carbon-max-char: 20ch;
    --carbon-bg-primary: hsl(0, 0%, 98%);
    --carbon-bg-secondary: hsl(0, 0%, 92%);
    --carbon-text-color: hsl(0, 0%, 20%);
    z-index: 10;
    font-size: var(--carbon-font-size);
    font-family: var(--carbon-font-family);
    margin-top: 2rem;

    @media (prefers-color-scheme: dark) {
      --carbon-bg-primary: hsl(0, 0%, 12%);
      --carbon-bg-secondary: hsl(0, 0%, 15%);
      --carbon-text-color: hsl(0, 0%, 90%);
    }

    * {
      margin: initial;
      padding: initial;
      line-height: initial;
    }

    > span {
      display: flex;
      flex-direction: column;
      min-inline-size: 130px;
      max-inline-size: calc(
        130px + var(--carbon-max-char) + 8ch
      );
      padding: var(--carbon-padding);
      gap: var(--carbon-padding);
      background-color: var(--carbon-bg-primary);
      box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.085),
        0 0 2px hsl(0deg 0% 0% / 0.085),
        0 0 4px hsl(0deg 0% 0% / 0.085),
        0 0 8px hsl(0deg 0% 0% / 0.085);
    }

    a {
      color: var(--carbon-text-color);
      text-decoration: none;

      &:hover {
        color: var(--carbon-text-color);
      }
    }

    .carbon-wrap {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5ex;
    }

    .carbon-img {
      flex: 0 0 130px;

      img {
        display: block;
      }
    }

    .carbon-text {
      flex-grow: 1;
      flex-basis: var(--carbon-max-char);
      line-height: 1.4;
      text-align: left;
    }

    .carbon-poweredby {
      padding: 6px 8px;
      background: var(--carbon-bg-secondary);
      color: var(--carbon-text-color);
      font-weight: 600;
      font-size: 0.6em;
      line-height: 1.4;
      letter-spacing: 0.2ch;
      text-align: center;
      text-transform: uppercase;
    }
  }
`;

function SidebarLayout({ sidebar, children }) {
  return (
    <Page
      css={css`
        ${mq[1]} {
          display: grid;
          grid-template-columns: ${sidebar ? 'clamp(160px, 20vw, 320px)' : ''} minmax(0, 1fr);
          grid-gap: 2rem;
        }
        ${mq[2]} {
          display: grid;
          grid-template-columns: ${sidebar ? 'clamp(160px, 20vw, 320px)' : ''} minmax(0, 1fr) clamp(160px, 20vw, 320px);
          grid-gap: 2rem;
        }
      `}
    >
      {sidebar && <div>{sidebar}</div>}
      <Children>{children}</Children>
      <CarbonPlaceholder>
        <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?serve=CWYIKK77&placement=decapcmsorg" id="_carbonads_js"></script>
      </CarbonPlaceholder>
    </Page>
  );
}

export default SidebarLayout;
