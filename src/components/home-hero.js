/** @jsx jsx */
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
    <Container
      css={css`
        text-align: center;
        padding-top: ${theme.space[3]};
        padding-bottom: ${theme.space[6]};
        max-width: 620px;

        ${mq[3]} {
          padding-top: ${theme.space[6]};
          padding-bottom: ${theme.space[8]};
        }
      `}
    >
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
  );
}

export default HomeHero;
