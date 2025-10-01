/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';

import Container from './container';
import theme from '../theme';
import { mq } from '../utils';
import HomeService from './home-service';

function HomeServices({ title, description, features }) {
  return (
    <Container>
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
      <div css={css`
        display: grid;
        grid-template-columns: 2, 1fr);
        gap: 40px;
      `}>
        {features.map((feature, i) => (
          <HomeService key={i} {...feature} />
        ))}
      </div>
    </Container>
  );
}

export default HomeServices;
