import styled from '@emotion/styled';
import theme from '../theme';
import { mq } from '../utils';

const Lead = styled.p`
  font-size: ${theme.fontsize[4]};
  margin-bottom: ${theme.space[2]};

  ${mq[2]} {
    font-size: ${theme.fontsize[5]};
    margin-bottom: ${theme.space[5]};
  }

  ${p => p.light};
`;

export default Lead;
