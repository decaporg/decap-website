/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';

import Container from './container';
import Button from './button';
import theme from '../theme';
import { mq } from '../utils';

function HomeServices({ title, description, features }) {
  return (
    <Container css={css`
      // overflow: hidden;
    `}>
      <h2 css={css`
        transform: rotate(-0.38deg);
        text-align: center;
        font-size: clamp(40px, 6vw, 92px);
        font-weight: 900;
        line-height: 1.1;
        letter-spacing: -0.92px;
        margin: ${theme.space[6]} 0 ${theme.space[2]};

        ${mq[2]} {
          font-weight: 900;
          margin: ${theme.space[7]} 0 ${theme.space[3]};
        }
      `}>{title}</h2>
      <p css={css`
        text-align: center;
        letter-spacing: 0.24px;
        margin-bottom: ${theme.space[5]};

        ${mq[2]} {
          margin-bottom: ${theme.space[6]};
        }
      `}>{description}</p>
      {features.map((feature, i) => (
        <div key={feature.title} css={css`
          background: ${theme.colors.white};
          padding: ${theme.space[5]} ${theme.space[4]};
          border-radius: ${theme.radii[3]};
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          margin-bottom: ${theme.space[5]};

          ${mq[2]} {
            padding: ${theme.space[6]};
          }
        `}>
          <h3 css={css`
            font-family: Montserrat;
            font-size: clamp(24px, 2.4vw, 36px);
            font-style: normal;
            font-weight: 800;
            line-height: 1.4
            letter-spacing: -0.72px;
            margin: 0 0 ${theme.space[2]};
          `}>{feature.title}</h3>
          <p>{feature.description}</p>
          <Button
            href={feature.button.href}
            className={i === 0 ? 'primary' : 'secondary'}
            css={css`
              margin: ${theme.space[3]} 0 0;
            `}
          >
            {feature.button.text}
          </Button>
        </div>
      ))}
    </Container>
  );
}

export default HomeServices;
