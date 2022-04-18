import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <Container>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavIcon id='shopping-bag' color='black' size={25} />
          <NavIcon id='search' color='black' size={25} />
          <NavIcon id='menu' color='black' size={25} />
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </Container>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    margin-right: 0px;
  }  
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const NavIcon = styled(Icon)`
  display: none;
`

const Container = styled.header`
  @media screen and (max-width: ${BREAKPOINTS.laptop}) {
    > div:first-child {
      display: none;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 5px;
      background-color: ${COLORS.gray[900]};
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.tablet}) {
    ${NavLink} {
      display: none;
    }
    ${NavIcon} {
      display: inline-block;
    }
    ${Side}:last-child {
      display: none;
    }
    ${Nav} {
      gap: 24px;
    }
  }  
`

export default Header;
