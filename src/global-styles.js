import React from 'react';
import { Global, css } from '@emotion/react';

import theme from './theme';

const globalStyles = css`
  * {
    box-sizing: border-box;
  }

  body {
    color: ${theme.colors.gray};
    font-family: ${theme.fontFamily};
    line-height: ${theme.lineHeight[2]};
    font-size: ${theme.fontsize[3]};
    background: ${theme.colors.shadeBlue};
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  img {
    max-width: 100%;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
    color: ${theme.colors.primaryDark};
    text-decoration: none;
  }

  .gitter-open-chat-button {
    &,
    &:visited {
      padding: ${theme.space[3]} ${theme.space[4]};
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontsize[3]};
      letter-spacing: 0.5px;
      line-height: 1;
      color: ${theme.colors.gray};
      background-color: ${theme.colors.primaryDark};
      box-shadow: 0 2px 16px 0 rgba(68, 74, 87, 0.15),
        0 1px 4px 0 rgba(68, 74, 87, 0.3);
    }

    &:hover {
      background-color: ${theme.colors.primaryLight};
      box-shadow: 0 2px 16px 0 rgba(68, 74, 87, 0.25),
        0 1px 4px 0 rgba(68, 74, 87, 0.5);
    }

    &:focus {
      box-shadow: 0 0 6px 3px rgba(62, 160, 127, 0.6);
      transition: none;
    }

    &:active {
      color: ${theme.colors.lightGray};
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
