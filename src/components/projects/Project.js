import React from "react";
import styled from "styled-components";
import theme from "theme";
import Title from "components/atoms/Title";
import { Link } from "react-router-dom";

const StyledWrapper = styled.li`
  border-radius: 10px;
  background: ${theme.tertiaryColor};
  padding: 15px;
  color: white;
  margin-bottom: 25px;
`;

const StyledBody = styled.div`
  font-size: ${theme.fontSize.s};
  line-height: 22px;
  margin-bottom: 30px;
`;
const StyledDateInfo = styled.span`
  font-size: ${theme.fontSize.xs};
  color: grey;
`;
const StyledUserName = styled.p`
  color: grey;
  margin: 0;
`;
const Project = ({ project }) => (
  <Link to={`project/${project.id}`}>
    <StyledWrapper>
      <Title>{project.title}</Title>
      <StyledUserName>
        Published by {project.authorFirstName} {project.authorLastName}
      </StyledUserName>
      {/* <StyledDateInfo>Today at :{project.createdAt}</StyledDateInfo> */}
    </StyledWrapper>
  </Link>
);

export default Project;
