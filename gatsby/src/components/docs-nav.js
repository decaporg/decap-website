import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

import Button from './button';
import TableOfContents from './table-of-contents';
import { mq } from '../utils';
import theme from '../theme';

const Menu = styled.nav`
  margin-bottom: ${theme.space[4]};

  ${mq[1]} {
    margin-bottom: ${theme.space[5]};
  }
`;

const MenuBtn = styled(Button)`
  ${mq[1]} {
    display: none;
  }
`;

const MenuContent = styled.div`
  display: ${p => (p.isOpen ? 'block' : 'none')};
  background: white;
  padding: ${theme.space[3]};

  ${mq[1]} {
    display: block;
    background: transparent;
    padding: 0;
  }
`;

const MenuSection = styled.details`
  margin-bottom: ${theme.space[3]};

  &[open] summary {
    list-style-type: '↓  ';
  }
`;

const SectionTitle = styled.summary`
  margin-bottom: ${theme.space[1]};
  font-weight: 700;
  cursor: pointer;
  list-style-type: none;
  list-style-position: outside;

  &:hover {
    list-style-type: '→  ';
  }
`;

const SectionList = styled.ul`
  list-style: none;
  padding-left: ${theme.space[3]};
`;

const MenuItem = styled.li``;

const NavLink = styled(Link)`
  display: block;
  font-weight: 400;
  font-size: ${theme.fontsize[3]};
  color: ${theme.colors.gray};
  line-height: ${theme.lineHeight[1]};
  transition: color 0.2s ease;
  padding: ${theme.space[2]} 0;

  &.active {
    color: ${theme.colors.primaryDark};
    font-weight: bold;
  }

  &:hover {
    color: ${theme.colors.primaryDark};
  }
`;

function DocsNav({ items, location }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(isOpen => !isOpen);
  }

  function isDetailsOpen(item) {
    return item.group?.edges.some(({ node }) => location.pathname === node.fields.slug);
  }

  return (
    <Menu>
      <MenuBtn onClick={toggleMenu} block>
        {isMenuOpen ? <span>&times;</span> : <span>&#9776;</span>} {isMenuOpen ? 'Hide' : 'Show'}{' '}
        Navigation
      </MenuBtn>
      <MenuContent isOpen={isMenuOpen}>
        {items.map(item => (
          <MenuSection key={item.title} open={isDetailsOpen(item)}>
            <SectionTitle>{item.title}</SectionTitle>
            <SectionList>
              {item.group?.edges.map(({ node }) => (
                <MenuItem key={node.fields.slug}>
                  <NavLink to={node.fields.slug} activeClassName="active">
                    {node.frontmatter.title}
                  </NavLink>
                  {location.pathname === node.fields.slug && <TableOfContents />}
                </MenuItem>
              ))}
            </SectionList>
          </MenuSection>
        ))}
      </MenuContent>
    </Menu>
  );
}

export default DocsNav;

export { NavLink };
