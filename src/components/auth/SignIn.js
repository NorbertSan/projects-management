import React from "react";
import styled from "styled-components";
import theme from "theme";
import { signIn } from "actions/authAction";
import { connect } from "react-redux";
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
const StyledAlert = styled.div`
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.yellowishColor};
  text-align: center;
  margin-top: 30px;
`;
class SignIn extends React.Component {
  state = {
    email: "",
    password: "",
  };
  onChangeHandler = (e) => {
    const type = e.target.id;
    const value = e.target.value;
    this.setState({
      [type]: value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { email, password } = this.state;
    const { authError } = this.props;
    const onChangeHandler = this.onChangeHandler;
    const handleSubmit = this.handleSubmit;
    return (
      <StyledWrapper>
        <StyledForm onSubmit={(e) => handleSubmit(e)}>
          <StyledTitle>Sign in</StyledTitle>
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
          <StyledButton type="submit">Login</StyledButton>
          {authError && <StyledAlert>{authError}</StyledAlert>}
        </StyledForm>
      </StyledWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  authError: state.auth.authError,
});

export default connect(mapStateToProps, { signIn })(SignIn);
