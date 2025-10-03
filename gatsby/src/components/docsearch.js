import React, { useState, useEffect, memo } from 'react';
import styled from '@emotion/styled';

import theme from '../theme';
import searchIcon from '../img/search.svg';

const SearchForm = styled.form`
  > span {
    width: 100%;
  }
`;

const SearchField = styled.input`
  color: white;
  font-size: ${theme.fontsize[2]};
  font-family: ${theme.fontFamily[1]};
  border-radius: ${theme.radii[2]};
  background-color: rgba(0, 0, 0, 0.1);
  color: ${theme.colors.white};
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 12px 50%;
  border: 2px solid ${theme.colors.lightishGray};
  appearance: none;
  width: 100%;
  padding: ${theme.space[2]};
  padding-left: 36px;
  outline: 0;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: ${theme.colors.lightestGray};
  }

  &:focus {
    border-color: ${theme.colors.primaryDark};
  }
`;

function DocSearch() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        appId: '633NBL2XMU',
        apiKey: '2e154688e9f443d6d895c9f226f01833',
        indexName: 'decapcms',
        inputSelector: '#algolia-search',
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    } else {
      setEnabled(false);
    }
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <SearchForm>
      <SearchField type="search" placeholder="Search the docs" id="algolia-search" />
    </SearchForm>
  );
}

export default memo(DocSearch);
