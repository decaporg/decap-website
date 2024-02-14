import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '../theme';
import { mq } from '../utils';

const Button = styled.a`
  white-space: nowrap;
  display: inline-block;
  font-size: ${theme.fontsize[3]};
  line-height: 1;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.white};
  border: 2px solid ${theme.colors.primaryLight};
  font-weight: 500;
  font-family: ${theme.fontFamily[1]};
  border-radius: ${theme.radii[4]};
  padding: 12px ${theme.space[3]};
  transition: all 0.2s ease-out;
  box-shadow: 0;

  ${mq[0]} {
    border-width: 3px;
    padding: ${theme.space[3]} ${theme.space[4]};
    font-weight: 600;
  }

  &:active {
    background-color: ${theme.colors.primaryDark};
    border-color: ${theme.colors.primaryDark};
    color: ${theme.colors.white};
  }

  &.secondary {
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryLight};
    border-color: currentColor;

    &:active {
      color: ${theme.colors.primaryDark};
    }
  }

  ${p => p.block && css`
    display: block;
    width: 100%;
  `};

  ${p => p.outline && css`
    background: none;
    color: ${theme.colors.primaryDark};
    font-weight: 500;
  `};

  ${p => p.active && css`
    box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.5);
  `};
`;

export default Button;
