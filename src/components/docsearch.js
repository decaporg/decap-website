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
  background-color: ${theme.colors.darkGray};
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

  &::placeholder {
    color: ${theme.colors.lightishGray};
  }
`;

function DocSearch() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: '08d03dc80862e84c70c5a1e769b13019',
        indexName: 'netlifycms',
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
