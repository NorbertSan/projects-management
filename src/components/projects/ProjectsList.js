import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Project from "components/projects/Project";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ProjectsList = ({ projects }) => (
  <StyledWrapper>
    {projects && projects.map((project) => <Project project={project} />)}
  </StyledWrapper>
);

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(mapStateToProps)(ProjectsList);
