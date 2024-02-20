/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from "react";

import { mq } from '../utils';
import Markdownify from "./markdownify";
import PageHero from "./page-hero";
import HeroTitle from "./hero-title";
import Lead from "./lead";
import theme from "../theme";
import CommunityChannelsList from "./community-channels-list";

function Community({ headline, subhead, sections }) {
  return (
    <PageHero>
      <div css={css`
        margin-bottom: ${theme.space[6]};
      `}>
        <HeroTitle>
          <Markdownify source={headline} />
        </HeroTitle>
        <Lead>
          <Markdownify source={subhead} />
        </Lead>
      </div>

      {sections.map(({ title: sectionTitle, channels }, channelIdx) => (
        <React.Fragment key={channelIdx}>
          <h2 css={css`
            margin: ${theme.space[2]} 0 ${theme.space[3]};

            ${mq[2]} {
              margin: ${theme.space[4]} 0 ${theme.space[4]};
            }
          `}>
            <Markdownify source={sectionTitle} />
          </h2>
          <CommunityChannelsList channels={channels} />
        </React.Fragment>
      ))}
    </PageHero>
  );
}

export default Community;
