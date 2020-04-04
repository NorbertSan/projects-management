import React from "react";
import styled from "styled-components";
import theme from "theme";
import Title from "components/atoms/Title";

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
const ProjectsList = ({ project }) => (
  <StyledWrapper>
    <Title>{project.title}</Title>
    <StyledBody>{project.content}</StyledBody>
    <StyledUserName>Published by Norbert</StyledUserName>
    <StyledDateInfo>
      Today at :{project.created && project.created}
    </StyledDateInfo>
  </StyledWrapper>
);

export default ProjectsList;
