import React from "react";
import { css } from "@emotion/react";
import Grid from "./grid";
import theme from '../theme';

function CommunityChannelsList({ channels }) {
  return (
    <Grid cols={channels.length}>

      {channels.map(({ title, description, link }, channelIdx) => (
        <div key={channelIdx} css={css`
          // background: ${theme.colors.white};
          // padding: ${theme.space[4]};
          // box-shadow: 0 0 0 1px ${theme.colors.lightGray};
          // border-radius: ${theme.radii[2]};
          margin-bottom: ${theme.space[4]};
        `}>
          <h3 css={css`
            font-weight: 500;
          `}>{title}</h3>
          <p>{description}</p>
          <a href={link.href}>{link.text}</a>
        </div>
      ))}
    </Grid>
  );
}

export default CommunityChannelsList;
