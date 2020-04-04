import React from "react";
import styled from "styled-components";
import ProjectsList from "components/projects/ProjectsList";
import NotificationsList from "components/dashboard/NotificationsList";

const StyledWrapper = styled.section`
  display: grid;
  grid-template-columns: 60% 40%;
  align-items: flex-start;
  width: 60%;
  margin: auto;
  margin-top: 80px;
  grid-gap: 50px;
`;

class Dashboard extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <ProjectsList />
        <NotificationsList />
      </StyledWrapper>
    );
  }
}

export default Dashboard;
