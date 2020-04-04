import React from "react";
import styled from "styled-components";
import theme from "theme";

const StyledWrapper = styled.div`
  margin-bottom: 30px;
`;
const StyledUserName = styled.span`
  color: #ffa41b;
  font-weight: ${theme.fontWeight.bold};
`;
const StyledInfo = styled.span`
  padding-left: 10px;
`;
const StyledParagraph = styled.p`
  color: grey;
  margin: 0;
  padding: 0;
  font-size: ${theme.fontSize.xs};
`;

const Notification = ({ notification }) => (
  <StyledWrapper>
    <StyledUserName>{notification.userName}</StyledUserName>
    <StyledInfo>{notification.text}</StyledInfo>
    <StyledParagraph>{notification.time}</StyledParagraph>
  </StyledWrapper>
);

export default Notification;
