import React from 'react';
import { Global, css } from '@emotion/react';

import theme from './theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.gray};
    font-family: ${theme.fontFamily[0]};
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "wdth" 90;
    line-height: ${theme.lineHeight[2]};
    font-size: ${theme.fontsize[3]};
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    margin: ${theme.space[1]} 0;
    padding-left: ${theme.space[4]};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fontFamily[1]};
    line-height: ${theme.lineHeight[1]};
    margin-top: 0;
    margin-bottom: 0.5em;
  }

  h1 {
    font-size: 36px;
  }

  h2 {
    font-size: 28px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    color: ${theme.colors.primaryLight};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  .button {
    display: inline-block;
    background: ${theme.colors.primaryDark};
    color: white;
    border-radius: ${theme.radii[1]};
    font-size: ${theme.fontsize[3]};
    font-weight: 700;
    padding: ${theme.space[2]} ${theme.space[3]};
    border: 2px solid ${theme.colors.primaryDark};
    cursor: pointer;
    transition: all 0.2s ease-out;
    box-shadow: 0;

    &:hover {
      box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
    }

    &:active {
      box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.5);
    }
  }

  .pagination-nav {
    margin: 2em 0 !important;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(2, 1fr);

    a {
      background: none;
      border: 2px solid ${theme.colors.gray};
      box-shadow: none;

      &:hover,
      &:focus {
        border: 2px solid ${theme.colors.primaryDark};
        text-decoration: none !important;
      }

      & .pagination-nav__sublabel {
        color: ${theme.colors.gray};
        font-size: ${theme.fontsize[2]};
      }

      & .pagination-nav__label {
        color: ${theme.colors.primaryDark};
      }
    }

    .pagination-nav__next {
      grid-column: 2/3;
      text-align: right;
    }
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
