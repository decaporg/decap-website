// eslint-disable-next-line no-unused-vars
import React from 'react';
import { css } from '@emotion/react';
import Lead from '../components/lead';
import Button from '../components/button';

import theme from '../theme';
import { mq } from '../utils';

function TemplateBanner({ title, hook, button }) {
  return (
    <section css={css`
      border: 1px solid ${theme.colors.primaryLight};
      border-radius: ${theme.radii[2]};
      margin: ${theme.space[7]} auto;
      max-width: 760px;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: ${theme.space[4]};
      padding: ${theme.space[4]} ${theme.space[5]};

      ${mq[2]} {
        padding: ${theme.space[6]} ${theme.space[7]};
      }
    `}>
      <Lead css={css`
        font-size: 18px;
        margin: 0 !important;
      `}>
        {title}
      </Lead>

      <p>{hook}</p>

      <Button href={button.href}>
        {button.text}
      </Button>
    </section>
  );
}

export default TemplateBanner;
