import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { mq } from '../utils';
import theme from '../theme';

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  padding-left: ${theme.space[4]};
  padding-right: ${theme.space[4]};

  ${mq[1]} {
    padding-left: ${theme.space[5]};
    padding-right: ${theme.space[5]};
  }

  ${mq[2]} {
    padding-left: ${theme.space[6]};
    padding-right: ${theme.space[6]};
  }

  ${p => p.size === 'sm' &&
    css`
      max-width: 800px;
    `};

  ${p => p.size === 'md' &&
    css`
      max-width: 1024px;
    `};

  ${p => p.size === 'lg' &&
    css`
      max-width: 1440px;
    `};
`;

export default Container;
