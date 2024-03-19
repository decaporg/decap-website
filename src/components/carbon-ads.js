import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { mq } from '../utils';

const CarbonWrapper = styled.div`
  ${mq[1]} {
    grid-column: 2;
  }

  ${mq[2]} {
    grid-column: initial;
  }

  #carbonads {
    --carbon-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    --carbon-font-size: 14px;
    --carbon-padding: 1.5ch;
    --carbon-max-char: 20ch;
    --carbon-bg-primary: hsl(228 19% 98% / 1);
    --carbon-bg-secondary: hsl(228 19% 95% / 1);
    --carbon-text-color: inherit;
    font-size: var(--carbon-font-size);
    font-family: var(--carbon-font-family);
    max-width: 240px;
    margin: 2rem auto 0;

    ${mq[2]} {
      margin-right: 0;
    }

    * {
      margin: initial;
      padding: initial;
      line-height: initial;
    }

    > span {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-inline-size: 130px;
      max-inline-size: calc(130px + var(--carbon-max-char) + 8ch);
      padding: var(--carbon-padding);
      gap: var(--carbon-padding);
      background-color: var(--carbon-bg-primary);
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
      justify-content: center;
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
      text-align: center;
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

const BlockedMessage = styled.div`
  background-color: hsl(228 19% 98% / 1);
  padding: 1.5ch;
  font-size: 14px;
  margin: 2rem auto 0;
`;

function CarbonAds() {
  const ref = useRef();
  const [isBlocked, setBlocked] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://cdn.carbonads.com/carbon.js?serve=CWYIK27J&placement=decapcmsorg';
    script.async = true;
    script.id = '_carbonads_js';
    ref.current.appendChild(script);
    script.onerror = (e) => {
      setBlocked(true);
    };
  }, []);

  return (
    <CarbonWrapper>
      <div ref={ref} />
      {isBlocked && (
        <BlockedMessage>
          <h4>You blocked an ad that keeps this project alive</h4>
          <p>
            Please consider supporting Decap by donating on <a href="https://opencollective.com/decap">Open Collective</a> or sponsoring on <a href="https://github.com/sponsors/decaporg/">GitHub</a>.
          </p>
        </BlockedMessage>
      )}
    </CarbonWrapper>
  );
}

export default CarbonAds;
