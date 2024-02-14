// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css } from '@emotion/react';
import Button from '../components/button';
import Markdownify from '../components/markdownify';

import theme from '../theme';
import { mq } from '../utils';

function TemplateBanner({ title, hook, button }) {
  return (
    <section css={css`
      margin: ${theme.space[7]} auto;
      max-width: 840px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: ${theme.space[4]};
      padding: ${theme.space[4]} ${theme.space[5]};
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border: 1px solid ${theme.colors.primaryLight};
        border-radius: ${theme.radii[1]};
        filter: blur(1px);
        z-index: -1;
        transform: rotate(-2.445deg);
      }

      &::after {
        transform: rotate(2.445deg);
        border-radius: ${theme.radii[2]};
      }

      ${mq[0]} {
        padding: ${theme.space[5]} ${theme.space[6]};
      }

      ${mq[2]} {
        padding: ${theme.space[6]} ${theme.space[7]};
      }
    `}>
      <h2 css={css`
        font-size: clamp(28px, 2.8vw, 36px);
        font-weight: 800;
        letter-spacing: -0.72px;
        margin: 0;

        em {
          color: ${theme.colors.primaryLight};
          font-style: normal;
        }
      `}>
        <Markdownify source={title} />
      </h2>

      <p css={css`
        font-family: ${theme.fontFamily[1]};
        max-width: 540px;
      `}>{hook}</p>

      <Button href={button.href}>
        {button.text}
      </Button>
    </section>
  );
}

export default TemplateBanner;
