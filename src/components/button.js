import { css } from '@emotion/react';
import styled from '@emotion/styled';

import theme from '../theme';

const Button = styled.a`
  white-space: nowrap;
  display: inline-block;
  font-size: ${theme.fontsize[3]};
  line-height: 1;
  background-color: ${theme.colors.primaryLight};
  color: ${theme.colors.white};
  border: 3px solid ${theme.colors.primaryLight};
  font-weight: 600;
  font-family: ${theme.fontFamily[1]};
  border-radius: ${theme.radii[4]};
  padding: ${theme.space[3]} ${theme.space[4]};
  transition: all 0.2s ease-out;
  text-decoration: none;
  box-shadow: 0;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.5);
  }

  &:active {
    box-shadow: inset 0 0 4px 0 rgba(0, 0, 0, 0.5);
  }

  &.secondary {
    background-color: transparent;
    color: ${theme.colors.primaryLight};
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
