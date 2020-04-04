import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { createProject } from "actions/projectsAction";
import theme from "theme";
import Title from "components/atoms/Title";

const StyledWrapper = styled.div`
  width: 500px;
  color: white;
  border-radius: 10px;
  padding: 15px 30px 100px;
  margin: 100px auto;
  background: ${theme.tertiaryColor};
  display: flex;
  flex-direction: column;
`;
const StyledForm = styled.form``;

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${theme.tertiaryColor} inset !important;
    -webkit-text-fill-color: white !important;
  }
`;
const StyledLabel = styled.label`
  margin-bottom: 5px;
`;
const StyledInput = styled.input`
  width: 90%;
  padding: 5px;
  padding-left: 0;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  outline: none;
  &:focus {
    border-color: ${theme.yellowishColor};
  }
`;
const StyledButton = styled.button`
  padding: 15px 40px;
  background: ${theme.yellowishColor};
  border: none;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.s};
  color: ${theme.tertiaryColor};
  border-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 40px;
  cursor: pointer;
`;
const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 80px;
`;
class CreateProject extends React.Component {
  state = {
    title: "",
    content: "",
  };
  onChangeHandler = (e) => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState({
      [type]: value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state);
  };

  render() {
    const { content, title } = this.state;
    const onChangeHandler = this.onChangeHandler;
    const onSubmit = this.onSubmit;
    return (
      <StyledWrapper onSubmit={(e) => onSubmit(e)}>
        <StyledTitle>Create new project</StyledTitle>
        <StyledForm>
          <StyledInputContainer>
            <StyledLabel htmlFor="title">Title</StyledLabel>
            <StyledInput
              type="text"
              id="title"
              required
              value={title}
              onChange={(e) => onChangeHandler(e)}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel htmlFor="password">Project content</StyledLabel>
            <StyledInput
              value={content}
              onChange={(e) => onChangeHandler(e)}
              type="text"
              id="content"
              required
            />
          </StyledInputContainer>
          <StyledButton type="submit">Create Project</StyledButton>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default withRouter(connect(null, { createProject })(CreateProject));
