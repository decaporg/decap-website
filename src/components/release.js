/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

import theme from '../theme';

const ReleaseLink = styled.a`
  display: block;
  padding: ${theme.space[4]} ${theme.space[3]};
  border-radius: ${theme.radii[1]};
  background: ${theme.colors.lighterGray};
  transition: background 0.2s ease;
  color: ${theme.colors.gray};
  height: 100%;

  h2,
  h3 {
    font-size: ${theme.fontsize[3]};
  }

  &:hover {
    background: ${theme.colors.white};
  }
`;

const Version = styled.span`
  background: ${theme.colors.shadeBlue};
  font-size: ${theme.fontsize[3]};
  padding: ${theme.space[1]};
  border-radius: ${theme.radii[1]};
  font-weight: 700;
  margin-right: ${theme.space[2]};
  color: ${theme.colors.gray};
`;

function Release({ publishedAt, url, name, shortDescriptionHTML }) {
  const displayDate = dayjs(publishedAt).format('MMMM D, YYYY');

  return (
    <li css={css`
      flex: 1;
    `}>
      <ReleaseLink href={url}>
        <div css={css`
          margin-bottom: ${theme.space[3]};
        `}>
          <Version>{name}</Version>
          <span css={css`
            font-size: ${theme.fontsize[1]};
          `}>
            {displayDate}
          </span>
        </div>
        <span
          css={css`
            font-size: ${theme.fontsize[2]};
          `}
        >
          <div dangerouslySetInnerHTML={{__html: shortDescriptionHTML }} />
        </span>
      </ReleaseLink>
    </li>
  );
}

export default Release;
