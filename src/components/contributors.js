import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import theme from '../theme';

const StyledContributors = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    height: 32px;
    width: 32px;
    border-radius: 10rem;
    margin-right: ${theme.space[1]};
    margin-bottom: ${theme.space[1]};
    transition: 0.1s;

    &:hover {
      transform: scale(1.3);
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25), 0 4px 12px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;

const Contributors = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    const fetchContributors = async () => {
      const response = await fetch('https://api.github.com/repos/decaporg/decap-cms/contributors?per_page=100');
      const data = await response.json();
      setContributors(data);
    };

    fetchContributors();
  }, []);

  return (
    <StyledContributors>
      {contributors.map((user) => (
        <a href={user.html_url} title={user.name} key={user.login}>
          <img src={user.avatar_url.replace('v=4', 's=32')} alt={user.login} />
        </a>
      ))}
    </StyledContributors>
  );
};

export default Contributors;