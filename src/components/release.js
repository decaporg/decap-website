/** @jsx jsx */
import { jsx } from '@emotion/react';
import dayjs from 'dayjs';
import styled from '@emotion/styled';

import theme from '../theme';

const ReleaseCard = styled.div`
  display: block;
  padding: ${theme.space[4]} ${theme.space[3]} ${theme.space[2]};
  border-radius: ${theme.radii[1]};
  background: ${theme.colors.lighterGray};
  transition: background 0.2s ease;
  color: ${theme.colors.gray};
  height: 100%;
  margin-bottom: ${theme.space[3]};
  flex: 1;

  h2,
  h3 {
    font-size: ${theme.fontsize[3]};
  }

  li {
    list-style: disc inside;
  }
`;

const Version = styled.a`
  background: ${theme.colors.shadeBlue};
  font-size: ${theme.fontsize[3]};
  padding: ${theme.space[1]};
  border-radius: ${theme.radii[1]};
  font-weight: 700;
  margin-right: ${theme.space[2]};
  margin-bottom: ${theme.space[3]};
  display: inline-block;
  color: ${theme.colors.gray};

  &:hover {
    color: ${theme.colors.primaryDark} !important;
  }
`;

const DisplayDate = styled.p`
  font-size: ${theme.fontsize[1]};
`;

const Links = styled.div`
  margin-top: ${theme.space[3]};

  a {
    font-weight: 700;
    text-decoration: none;
    margin-right: ${theme.space[3]};
    color: ${theme.colors.gray};

    &:hover {
      color: ${theme.colors.primaryDark};
    }

    &::after {
      content: '↗';
      margin-left: ${theme.space[1]};
      font-size: ${theme.fontsize[1]};
      color: ${theme.colors.lightishGray};
    }
  }
`;

function Release({ published_at, url, name }) {
  const displayDate = dayjs(published_at).format('MMMM D, YYYY');

  return (
    <ReleaseCard>
      <Version href={url}>{name}</Version>
      <DisplayDate>
        {displayDate}
      </DisplayDate>
      <Links>
        <a href={url} target="_blank" rel="noreferrer">GitHub</a>
        <a href={`https://www.npmjs.com/package/decap-cms/v/${name.split('@')[1]}`} target="_blank" rel="noreferrer">NPM</a>
      </Links>
    </ReleaseCard>
  );
}

export default Release;
