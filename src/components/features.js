import React from 'react';
import { css } from '@emotion/react';

import Markdownify from './markdownify';
import theme from '../theme';
import Button from './button';
import Grid from './grid';
import { mq } from '../utils';

function FeatureItem({ title, description, image, reverse }) {
  return (
    <Grid cols={2} css={css`
      align-items: center;
      margin: ${theme.space[6]} 0;
    `}>
      <div css={css`
        ${mq[1]} {
          order: ${reverse ? '1' : '-1'};
        }
      `}>
        <h3 css={css`
          font-size: ${theme.fontsize[4]};
        `}>
          {title}
        </h3>

        <p css={css`
          font-size: 18px;
        `}>
          <Markdownify source={description} />
        </p>
      </div>

      {image && <img
        src={require(`../img/${image}`).default}
        alt=""
        css={css`
          display: block;
          margin: ${theme.space[5]} auto 0;

          ${mq[2]} {
            margin: 0 0 0 ${reverse ? 'auto' : '0'};
          }
        `}
      />}
    </Grid>
  );
}

function Features({ title, button, features }) {
  return (
    <div css={css`
      margin: ${theme.space[4]} 0;

      ${mq[1]} {
        margin: ${theme.space[6]} 0;
      }
    `}>
      <h2 css={css`
        text-align: center;
        color: ${theme.colors.primaryLight};
      `}>{title}</h2>

      {features.map((feature, i) => <FeatureItem
        {...feature}
        reverse={i % 2 === 0}
        key={feature.title}
      />)}

      <Button href={button.href} className='secondary' css={css`
          display: block;
          width: min-content;
          margin: ${theme.space[5]} auto;
        `}>
        {button.text}
      </Button>
    </div>
  );
}

export default Features;
