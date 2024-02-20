/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';

import Container from './container';
import HeroTitle from '../components/hero-title';
import Markdownify from '../components/markdownify';
import Lead from '../components/lead';
import Button from './button';
import theme from '../theme';
import { mq } from '../utils';
import styled from '@emotion/styled';

const HeroButtons = styled.div`
  display: flex;
  gap: ${theme.space[3]};
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${theme.space[4]};
`;

function HomeHero({ headline, subhead, buttons}) {
  return (
    <div css={css`
      overflow: hidden;
    `}>
      <div css={css`
        text-align: center;
        position: relative;
        color: ${theme.colors.white};
        background-color: ${theme.colors.darkerGray};

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100%;
          background: radial-gradient(50% 50% at 50% 50%, #3B1234 0%, #11081F 64%);
        }
      `}>
        <Container css={css`
          max-width: 620px;
          padding-top: ${theme.space[3]};
          padding-bottom: ${theme.space[5]};
          z-index: 1;
          position: relative;

          ${mq[3]} {
            padding-top: ${theme.space[7]};
            padding-bottom: ${theme.space[7]};
          }
        `}>
          <HeroTitle>{headline}</HeroTitle>

          <p css={css`
            margin: ${theme.space[4]} auto;
            max-width: 400px;

            ${mq[2]} {
              margin: ${theme.space[5]} auto;
            }
          `}>{subhead}</p>

          <HeroButtons>
            {buttons.map(item => <Button
              href={item.href}
              key={item.text}
              className={item.class}>
              {item.text}
            </Button>)}
          </HeroButtons>
        </Container>
      </div>

      <div css={css`
        border-style: solid;
        border-width: 6vw 100vw 0 0;
        border-color: ${theme.colors.darkerGray} transparent transparent transparent;
        filter: drop-shadow(0px 20px 24px rgba(0, 0, 0, 0.25));
        position: relative;
        z-index: -1;
        margin-bottom: ${theme.space[5]};

        ${mq[3]} {
          margin-bottom: ${theme.space[6]};
        }
      `} />
    </div>
  );
}

export default HomeHero;
