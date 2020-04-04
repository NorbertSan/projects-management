import React from "react";
import styled from "styled-components";
import theme from "theme";
import { NavLink } from "react-router-dom";
import SignInLinks from "components/layout/SignInLinks";
import SignUpLinks from "components/layout/SignUpLinks";
import Logo from "components/atoms/Logo";

const StyledWrapper = styled.header`
  width: 100%;
  height: 12vh;
  background: ${theme.primaryColor};
  color: white;
`;
const StyledNavLinks = styled.nav`
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledNavLinks>
      <Logo as={NavLink} to="/">
        MarioPlan
      </Logo>
      <SignInLinks />
      {/* <SignUpLinks /> */}
    </StyledNavLinks>
  </StyledWrapper>
);
export default Navbar;
