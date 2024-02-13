import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Markdownify from './markdownify';
import theme from '../theme';
import Button from './button';
import Grid from './grid';

const Title = styled.h3`
  color: ${theme.colors.primaryLight};
  font-size: ${theme.fontsize[4]};
`;

const Text = styled.p`
  font-size: 18px;
  a {
    font-weight: 700;
  }
`;

function FeatureItem({ title, description, image, reverse }) {
  return (
    <Grid cols={2} css={css`
      align-items: center;
      margin: ${theme.space[6]} 0;
    `}>
      {image && <img
        src={require(`../img/${image}`).default}
        alt=""
        css={css`
          display: block;
          margin-left: ${reverse ? 'auto' : '0'};
        `}
      />}

      <div css={css`
        order: ${reverse ? '1' : '-1'};
      `}>
        <Title>
          <Markdownify source={title} />
        </Title>
        <Text>
          <Markdownify source={description} />
        </Text>
      </div>
    </Grid>
  );
}

function Features({ title, button, features }) {
  return (
    <div css={css`
      margin: ${theme.space[6]};
    `}>
      <h2 css={css`
        text-align: center;
        margin: ${theme.space[6]};
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
