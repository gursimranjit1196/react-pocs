import React from 'react';
import { Link } from "react-router-dom";


class HeaderContainer extends React.Component {
  
  render() {
    return (
      <div style = {{ backgroundColor: '#D6EAF8', textAlign: "center" }}>
        <Link to = "/" >HOME</Link> | <Link to = "/todo" >TODO</Link> | <Link to = "/users">USERS</Link>
      </div>
    );
  }

}

export default HeaderContainer;
