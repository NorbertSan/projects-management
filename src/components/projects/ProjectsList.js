import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Project from "components/projects/Project";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const StyledWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const ProjectsList = ({ projects }) => (
  <StyledWrapper>
    {projects &&
      projects.map((project) => <Project key={project.id} project={project} />)}
  </StyledWrapper>
);

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(ProjectsList);
