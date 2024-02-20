import React from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';

import Container from './container';
import theme from '../theme';
import { mq } from '../utils';
import Markdownify from './markdownify';

const Root = styled.footer`
  background: ${theme.colors.primaryLight};
  color: ${theme.colors.white};
  padding: ${theme.space[5]} 0;

  a {
    color: ${theme.colors.white};
    font-weight: 400;
    text-decoration: underline;
  }
`;

const Links = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ${theme.space[1]};
`;

function Footer({ logo, maintained, links, socials }) {
  return (
    <Root>
      <Container>
        <div css={css`
          display: flex;
          flex-direction: column;
          gap: ${theme.space[4]};

          ${mq[2]} {
            flex-direction: row;
            justify-content: space-between;
          }
        `}>
          <div>
            <img src={logo} alt="Decap CMS" css={css`
              height: 40px;
              width: auto;
              margin-bottom: ${theme.space[2]};
            `} />
            <p><Markdownify source={maintained} /></p>
          </div>

          <Links>
            {links.map((link, i) => <a href={link.href}>{link.text}</a>)}
          </Links>

          <Links>
            {socials.map((link, i) => <a href={link.href}>{link.text}</a>)}
          </Links>
        </div>
      </Container>
    </Root>
  );
}

export default Footer;
