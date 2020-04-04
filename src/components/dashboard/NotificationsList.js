import React from "react";
import styled from "styled-components";
import theme from "theme";
import Notification from "components/dashboard/Notification";
import Title from "components/atoms/Title";

const notifications = [
  {
    id: 1,
    userName: "Mario Plummer",
    text: "Added a new project",
    time: "a few seconds ago",
  },
  {
    id: 2,
    userName: "Mario Plummer",
    text: "Added a new project",
    time: "a few seconds ago",
  },
  {
    id: 3,
    userName: "Mario Plummer",
    text: "Added a new project",
    time: "a few seconds ago",
  },
];

const StyledWrapper = styled.div`
  color: white;
  background: ${theme.tertiaryColor};
  border-radius: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
const StyledTitle = styled(Title)`
  text-align: center;
  margin-bottom: 50px;
`;

const NotificationsList = () => (
  <StyledWrapper>
    <StyledTitle>Notifications</StyledTitle>
    {notifications &&
      notifications.map((notification) => (
        <Notification notification={notification} key={notification.id} />
      ))}
  </StyledWrapper>
);

export default NotificationsList;
