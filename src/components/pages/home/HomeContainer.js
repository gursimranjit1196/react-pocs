import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import TodoContainer from "../todo/TodoContainer";
import AboutContainer from "../about/AboutContainer";
import UserContainer from "../user/UserContainer";
import HeaderContainer from "../../shared/header/HeaderContainer";


class HomeContainer extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Router>
          <HeaderContainer />
            
          <Route exact path = "/" component = { AboutContainer } />
          <Route path = "/todo" component = { TodoContainer } />
          <Route path = "/users" component = { UserContainer } />
        </Router>
      </React.Fragment>
    );
  }

}

export default HomeContainer;
