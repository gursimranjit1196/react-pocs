import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import AboutContainer from "../about/AboutContainer";
import UserContainer from "../user/UserContainer";
import HeaderContainer from "../../shared/header/HeaderContainer";


import AsyncComponent from '../../shared/asyncComponent/AsyncComponent';



const asyncTodoContainer = AsyncComponent(() => {
  return import("../todo/TodoContainer");
})


class HomeContainer extends React.Component {
  
  render() {
    return (
      <React.Fragment>
        <Router>
          <HeaderContainer />
            
          <Route exact path = "/" component = { AboutContainer } />
          <Route path = "/todo" component = { asyncTodoContainer } />
          <Route path = "/users" component = { UserContainer } />
        </Router>
      </React.Fragment>
    );
  }

}

export default HomeContainer;
