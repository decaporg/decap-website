import React from 'react';
import { css } from '@emotion/react';

import Container from './container';
import Markdownify from '../components/markdownify';
import Grid from '../components/grid';
import Button from '../components/button';
import theme from '../theme';
import { mq } from '../utils';

function HomeSection({ title, hook, text, button, image, reverse }) {
  return (
    <Container css={css`
      margin-top: ${theme.space[6]};
      margin-bottom: ${theme.space[6]};
    `}>
      <Grid cols={2} reverse={reverse}>
        <div css={css`
          ${mq[1]} {
            order: ${reverse ? '1' : '-1'};
          }
        `}>
          <h2 css={css`
            margin-bottom: ${theme.space[4]};
            font-size: ${theme.fontsize[6]};
            text-shadow: ${theme.colors.primaryLight} 2px 1px 20px;
          `}>{title}</h2>
          <h3>{hook}</h3>
          <div css={css`
            a {
              color: inherit;
              text-decoration: underline;
            }
          `} >
            <Markdownify source={text} />
          </div>
          <Button href={button.href} className='secondary' css={css`
            margin: ${theme.space[4]} 0;
          `}>
            {button.text}
          </Button>
        </div>
        <div>
          <img src={require(`../img/${image}`).default} alt="" />
        </div>
      </Grid>
    </Container>
  );
}

export default HomeSection;
