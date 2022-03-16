import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        {/* Center the <Nav/> but keep the logo on the left side */}
        {/* 
          This works by setting `flex-grow: 1` and `flex-basis: 0`
          letting both <Side /> components consume all the space
          not taken up by the <Nav /> while keeping it centered.
          
          We also put the <Logo /> inside the left <Side />
          to keep it on the *left side* of the <MainHeader />
        */}
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  /* padding: 0 32px; */
  border-bottom: 1px solid ${COLORS.gray[300]};

  display: flex;
  align-items: baseline;
  height: 72px;
  padding: 18px 32px;
`;

const Side = styled.span`
  flex: 1;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 48px;

  flex: 1;
  margin: 0 48px;
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

export default Header;
