/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { jsx, css } from '@emotion/react';

import Button from './button';
import theme from '../theme';
import { mq } from '../utils';

function HomeService({ title, description, button, className, image }) {
  return (
    <div key={title} className={className} css={css`
      background: ${theme.colors.white};
      border-radius: ${theme.radii[3]};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      overflow: hidden;
      grid-column-end: span 2;
      text-align: center;
      flex-direction: column-reverse;

      .service-image {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: ${theme.space[6]};
        padding-bottom: 0;
      }

      &.support {
        box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.05);
        background: linear-gradient(180deg, #5620C8 6.75%, #9B50E7 22.45%, #FFF 54.54%);

        ${mq[1]} {
          background: linear-gradient(270deg, #5620C8 6.75%, #9B50E7 22.45%, #FFF 54.54%);
          text-align: left;
          flex-direction: row;

          .service-image {
            padding-bottom: ${theme.space[6]};
          }
        }

      }

      &.onboarding {
        background: linear-gradient(359deg, #FFF 40.25%, #FF92CA 65.96%, #EE55DF 90.44%);
        box-shadow: 0px 0px 37.6px 0px rgba(0, 0, 0, 0.05);

        ${mq[1]} {
          grid-column-end: span 1;
        }
      }

      &.development {
        background: linear-gradient(180deg, #6027CD -78.64%, #11081F 99.97%);
        color: ${theme.colors.white};

        ${mq[1]} {
          grid-column-end: span 1;
        }
      }
    `}>
      <div css={css`
        padding: ${theme.space[5]} ${theme.space[4]};
        flex: 1;

        ${mq[2]} {
          padding: ${theme.space[6]};
        }
      `}>
        <h3 css={css`
          font-family: Montserrat;
          font-size: clamp(24px, 2.4vw, 36px);
          font-style: normal;
          font-weight: 800;
          line-height: 1.4
          letter-spacing: -0.72px;
          margin: 0 0 ${theme.space[3]};
        `}>{title}</h3>

        <p>{description}</p>

        <Button
          href={button.href}
          className={className === 'support' ? 'primary' : 'secondary'}
          css={css`
            margin: ${theme.space[4]} 0 0;
          `}>
          {button.text}
        </Button>
      </div>

      <div className='service-image'>
        <img src={require(`../img/${image}`).default} alt="" />
      </div>
    </div>
  );
}

export default HomeService;
