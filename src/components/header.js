/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { SiGithub } from '@icons-pack/react-simple-icons';

import Container from './container';
import DocSearch from './docsearch';
import searchIcon from '../img/search.svg';
import theme from '../theme';
import { mq } from '../utils';

const StyledHeader = styled.header`
  background: ${theme.colors.white};
  padding-top: ${theme.space[3]};
  padding-bottom: ${theme.space[3]};
  transition: background 0.2s ease, padding 0.2s ease, box-shadow 0.2s ease;
  font-family: ${theme.fontFamily[1]};

  ${mq[2]} {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: ${theme.zIndexes.header};

    ${p =>
      !p.collapsed &&
      css`
        // padding-top: ${theme.space[5]};
        // padding-bottom: ${theme.space[5]};
      `};
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  ${mq[1]} {
    margin-right: ${theme.space[5]};
  }

  a {
    display: flex;
    align-items: center;
  }

  img {
    height: clamp(32px, 3vw, 40px);
    width: auto;
  }
`;

const MenuActions = styled.div`
  flex: 1 0 60px;
  display: flex;
  justify-content: flex-end;
  ${mq[1]} {
    display: none;
  }
`;

const MenuBtn = styled.button`
  background: none;
  border: 0;
  padding: ${theme.space[2]};
  font-size: ${theme.fontsize[6]};
  line-height: 1;
`;

const SearchBtn = styled(MenuBtn)``;

const ToggleArea = styled.div`
  display: ${p => (p.open ? 'block' : 'none')};
  flex: 1 0 100px;
  width: 100%;
  margin-top: ${theme.space[3]};

  ${mq[1]} {
    display: block;
    width: auto;
    margin-top: 0;
  }
`;

const SearchBox = styled(ToggleArea)`
  ${mq[1]} {
    flex: 1;
    max-width: 200px;
    margin-right: ${theme.space[3]};
  }
`;

const Menu = styled(ToggleArea)`
  ${mq[1]} {
    flex: 0 0 auto;
    margin-left: auto;
  }
`;

const MenuList = styled.ul`
  ${mq[1]} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.space[3]};
  }

  ${mq[2]} {
    gap: ${theme.space[5]};
  }

  ${mq[4]} {
    gap: ${theme.space[6]};
  }
`;

const MenuItem = styled.li`
  line-height: 1;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  ${mq[2]} {
    font-size: ${theme.fontsize[4]};
  }
`;

function Header({ hasHeroBelow }) {
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // TODO: use raf to throttle events
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const currentWindowPos = document.documentElement.scrollTop || document.body.scrollTop;

    const scrolled = currentWindowPos > 0;

    setScrolled(scrolled);
  }

  function handleMenuBtnClick() {
    setNavOpen(s => !s);
    setSearchOpen(false);
  }

  function handleSearchBtnClick() {
    setSearchOpen(s => !s);
    setNavOpen(false);
  }

  return (
    <StyledHeader collapsed={scrolled} id="header">
      <HeaderContainer>
        <Logo>
          <Link to="/">
            <img src="/img/decap-logo.svg" alt="Decap CMS logo" />
          </Link>
        </Logo>
        <MenuActions>
          <SearchBtn onClick={handleSearchBtnClick}>
            {isSearchOpen ? <span>&times;</span> : <img src={searchIcon} alt="search" />}
          </SearchBtn>
          <MenuBtn onClick={handleMenuBtnClick}>
            {isNavOpen ? <span>&times;</span> : <span>&#9776;</span>}
          </MenuBtn>
        </MenuActions>
        <SearchBox open={isSearchOpen}>
          <DocSearch />
        </SearchBox>
        <Menu open={isNavOpen}>
          <MenuList>
            <MenuItem>
              <NavLink to="/docs/intro/">Docs</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/services/" className="ga-menu">
                Pro Help
                <span
                  css={css`
                    font-size: ${theme.fontsize[1]};
                    color: ${theme.colors.primaryLight};
                    margin-left: ${theme.space[1]};
                    vertical-align: top;
                  `}
                >
                  New
                </span>
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/community/">Community</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/blog/">Blog</NavLink>
            </MenuItem>
            <MenuItem css={css`
              height: 28px;
              padding-left: 8px;
            `}>
              <NavLink to="https://github.com/decaporg/decap-cms">
                <SiGithub size={28} />
              </NavLink>
            </MenuItem>
          </MenuList>
        </Menu>
      </HeaderContainer>
    </StyledHeader>
  );
}

export default Header;
