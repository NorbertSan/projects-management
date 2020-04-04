import React from "react";
import styled from "styled-components";
import Title from "components/atoms/Title";
import { withRouter } from "react-router-dom";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: 50px;
  padding-left: 15%;
  width: 50%;
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

const ProjectDetails = ({ match }) => {
  console.log(match.params.id);
  return (
    <StyledWrapper>
      <Title>Project Title</Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus porro
        aliquam dolorum nulla delectus aut, eligendi est maiores eum
        perspiciatis enim quaerat accusamus aliquid quia recusandae fugit
        tempora alias quis beatae iusto. Nulla commodi cumque at doloribus
        numquam, nemo deleniti soluta obcaecati accusantium, aperiam rem hic
        delectus exercitationem recusandae reiciendis.
      </p>
      <StyledDataInfo>
        <p>Posted by Norbert</p>
        <p>2nd September, 2am</p>
      </StyledDataInfo>
    </StyledWrapper>
  );
};

export default withRouter(ProjectDetails);
