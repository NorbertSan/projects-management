import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import theme from "theme";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 50px;
  padding-left: 15%;
  width: 50%;
  color: ${theme.tertiaryColor};
`;
const StyledDataInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
  p {
    margin: 0;
    margin-bottom: 5px;
  }
  p:nth-child(1) {
    padding-top: 20px;
    border-top: 1px solid grey;
  }
`;
const StyledLoader = styled.div`
  text-align: center;
  font-size: ${theme.fontSize.l};
  color: ${theme.tertiaryColor};
  margin-top: 30px;
`;

const ProjectDetails = ({ project }) => {
  return (
    <>
      {project ? (
        <StyledWrapper>
          <Title>{project.title}</Title>
          <p>{project.content}</p>
          <StyledDataInfo>
            <p>
              Posted by {project.authorFirstName} {project.authorLastName}
            </p>
            <p>2nd September, 2am</p>
          </StyledDataInfo>
        </StyledWrapper>
      ) : (
        <StyledLoader>Loading project...</StyledLoader>
      )}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects",
    },
  ])
)(withRouter(ProjectDetails));
