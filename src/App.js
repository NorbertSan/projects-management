import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "components/layout/Navbar";
import GlobalStyle from "globalStyle";
import Dashboard from "components/dashboard/Dashboard";
import SignIn from "components/auth/SignIn";
import SignUp from "components/auth/SignUp";
import CreateProject from "components/projects/CreateProject";
import ProjectDetails from "components/projects/ProjectDetails";
import store from "store";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/create" component={CreateProject} />
        <Route path="/project/:id" component={ProjectDetails} />
      </Switch>
    </BrowserRouter>
  </Provider>
);
export default App;
