import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "theme";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
`;
const StyledLink = styled(NavLink)`
  text-decoration: none;
  margin: 30px;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  color: white;
`;

const SignUpLinks = () => (
  <StyledWrapper>
    <StyledLink to="/signin">Login</StyledLink>
    <StyledLink to="/signup">Sign up</StyledLink>
  </StyledWrapper>
);

export default SignUpLinks;
