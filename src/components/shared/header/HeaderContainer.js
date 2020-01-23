import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";



class HeaderContainer extends React.Component {

  render() {
    return (
      <div style = {{ backgroundColor: '#D6EAF8', textAlign: "center" }}>
        <Link to = "/" >HOME</Link> | <Link to = "/todo" >TODO</Link> | <Link to = "/users">USERS({ this.props.userList.length })</Link>
      </div>
    );
  }

}


const mapStateToProps = state => {
  return {
      userList: state.User.list
  }
}


export default connect(mapStateToProps)(HeaderContainer)
