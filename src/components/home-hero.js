/** @jsx jsx */
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

function HomeHero({ children }) {
  return (
    <>
      <div css={css`
        text-align: center;
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100vw;
          height: 100%;
          z-index: -1;
          background: radial-gradient(55% 35% at 50% 77%, hsl(330deg 100% 50% / 40%) 0%, ${theme.colors.lightestGray} 50%);
          filter: drop-shadow(0px 4px 43.7px rgba(0, 0, 0, 0.25));
        }
      `}>
        <Container css={css`
          max-width: 620px;
          padding-top: ${theme.space[3]};
          padding-bottom: ${theme.space[5]};

          ${mq[3]} {
            padding-top: ${theme.space[6]};
            padding-bottom: ${theme.space[7]};
          }
        `}>
          <HeroTitle>
            <Markdownify source={children.headline} />
          </HeroTitle>

          <Lead>
            <Markdownify source={children.subhead} />
          </Lead>

          <HeroButtons>
            {children.buttons.map(item => <Button
              href={item.href}
              className={item.class}>
              {item.text}
            </Button>)}
          </HeroButtons>
        </Container>
      </div>

      <div css={css`
        border-style: solid;
        border-width: 6vw 100vw 0 0;
        border-color: ${theme.colors.lightestGray} transparent transparent transparent;
        position: relative;
        z-index: -1;
        margin-bottom: ${theme.space[5]};

        ${mq[3]} {
          margin-bottom: ${theme.space[7]};
        }
      `} />
    </>
  );
}

export default HomeHero;
