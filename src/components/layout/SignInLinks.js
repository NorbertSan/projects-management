import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "actions/authAction";
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
  margin: 0 40px;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  color: white;
`;
const StyledInitials = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${theme.yellowishColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyledLetters = styled.span`
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.m};
  color: ${theme.navigationColor};
`;
const StyledLogOut = styled.a`
  text-decoration: none;
  margin: 0 40px;
  font-size: ${theme.fontSize.m};
  font-weight: ${theme.fontWeight.bold};
  color: white;
  cursor: pointer;
  z-index: 9;
`;
const SignInLinks = ({ logOut }) => (
  <StyledWrapper>
    <StyledLink to="/create">New project</StyledLink>
    <StyledLogOut onClick={logOut}>Log out</StyledLogOut>
    <StyledInitials>
      <StyledLetters>MS</StyledLetters>
    </StyledInitials>
  </StyledWrapper>
);

export default connect(null, { logOut })(SignInLinks);
