/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

import theme from '../theme';

const Releases = styled.div`
`;

const Release = styled.div`
  margin-bottom: ${theme.space[2]};
`;

const Version = styled.a`
`;

const Date = styled.p`
  font-size: ${theme.fontsize[1]};
`;

function WhatsNew({ releases }) {

  return (
    <section css={css`
      text-align: left;
      position: absolute;
      right: -20vw;
      top: 50%;
      width: 200px;
      transform: translateY(-50%);
      display: none;

      a {
        color: inherit;
      }
    `}>
      <h3><a href="https://github.com/decaporg/decap-cms/releases/" css={css`
      `}>Latest Releases</a></h3>

      <Releases>
        {releases.length > 0 && releases.map((item, idx) => (
          <Release key={idx}>
            <Version href={item.url}>{item.name}</Version>
            <Date>
              {dayjs(item.published_at).format('MMMM D, YYYY')}
            </Date>
          </Release>
        ))}
      </Releases>
    </section>
  );
}

export default WhatsNew;
