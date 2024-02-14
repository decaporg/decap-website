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
      margin: ${theme.space[5]} 0;

      ${mq[1]} {
      margin: ${theme.space[6]} 0;
      }
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

      {image && <div css={css`
        position: relative;
        transform: rotate(${reverse ? '-' : ''}2.8deg);

        &::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(${reverse ? '-' : ''}4deg);
          width: 50%;
          height: 30%;
          border-radius: 100%;
          background: linear-gradient(90deg, #F50F1A 0%, #FB3CEE 100%);
          filter: blur(70px);
          z-index: -1;
        }
      `}>
        <img
          src={require(`../img/${image}`).default}
          alt=""
          css={css`
            display: block;
            margin: ${theme.space[5]} auto 0;
            background: ${theme.colors.white};
            border-radius: ${theme.radii[4]};

            ${mq[2]} {
              margin: 0 0 0 ${reverse ? 'auto' : '0'};
            }
          `}
        />
      </div>}
    </Grid>
  );
}

function Features({ title, id, link, button, features }) {
  return (
    <div id={id} css={css`
      margin: ${theme.space[2]} 0;
      position: relative;
    `}>
      <h2 css={css`
        text-align: center;
        color: ${theme.colors.lightishGray};
        background: ${theme.colors.white};
        display: flex;
        gap: 8px;
        justify-content: center;
        flex-direction: ${id === 'developers' ? 'row' : 'row-reverse'};
        position: sticky;
        padding: ${theme.space[2]} 0;
        top: 0;

        ${mq[1]} {
          top: ${theme.space[6]};
          padding: ${theme.space[4]} 0 ${theme.space[3]};
        }
      `}>
        <a href={'#' + id} css={css`
          color: ${theme.colors.primaryLight};
        `}>
          {title}
        </a>
        <span>/</span>
        <a href={link.href} css={css`
          color: ${theme.colors.lightishGray};
        `}>
          {link.text}
        </a>
      </h2>

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
