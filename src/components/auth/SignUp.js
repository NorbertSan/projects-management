import React from "react";
import styled from "styled-components";
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
const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 80px;
`;

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
`;
class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  onChangeHandler = (e) => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState({
      [type]: value,
    });
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    const onChangeHandler = this.onChangeHandler;
    return (
      <StyledWrapper>
        <StyledForm>
          <StyledTitle>Sign up</StyledTitle>
          <StyledInputContainer>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => onChangeHandler(e)}
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel htmlFor="password">Password</StyledLabel>
            <StyledInput
              value={password}
              onChange={(e) => onChangeHandler(e)}
              type="password"
              id="password"
              minlength="8"
              maxlength="20"
              required
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel htmlFor="password">First name</StyledLabel>
            <StyledInput
              value={firstName}
              onChange={(e) => onChangeHandler(e)}
              type="text"
              id="firstName"
              required
            />
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledLabel htmlFor="password">Last name</StyledLabel>
            <StyledInput
              value={lastName}
              onChange={(e) => onChangeHandler(e)}
              type="text"
              id="lastName"
              required
            />
          </StyledInputContainer>
          <StyledButton type="submit">Register</StyledButton>
        </StyledForm>
      </StyledWrapper>
    );
  }
}

export default SignUp;
