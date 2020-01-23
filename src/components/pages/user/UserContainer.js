import React from 'react';
import { connect } from "react-redux";

// Form Elements
import CustomInput from "../../shared/formElements/input/CustomInput";
import CustomSelect from "../../shared/formElements/select/CustomSelect";

import ACTIONS from "../../../store/user/actions";
import CreateUserForm from "../../../constants/user/CreateUserForm";

class UserContainer extends React.Component {

  state = CreateUserForm

  valueChangeHandler = (event) => {
    let userForm = { ...this.state.userForm }

    userForm[event.target.name].value = event.target.value

    this.setState({ userForm })
  }


  getUserForm = () => {
    let res = {}

    for (let ele in this.state.userForm) {
      res[ele] = this.state.userForm[ele].value
    }

    return res
  }


  formSubmitHandler = (e) => {
    e.preventDefault()
    this.props.addUser(this.getUserForm())
  }


  resetForm = () => {
    let userForm = { ...this.state.userForm }

    for (let ele in userForm) userForm[ele].value = ""

    this.setState({ userForm })
  }

  
  render() {
    return (
      <React.Fragment>
        <form onSubmit = { this.formSubmitHandler }>
            <CustomInput type = { this.state.userForm.name.type } elementConfig = { this.state.userForm.name.elementConfig } value = { this.state.userForm.name.value } valueChangeHandler = { this.valueChangeHandler } label = { this.state.userForm.name.label } name = { this.state.userForm.name.name }  />
            <CustomSelect type = { this.state.userForm.gender.type } elementConfig = { this.state.userForm.gender.elementConfig } value = { this.state.userForm.gender.value } valueChangeHandler = { this.valueChangeHandler } label = { this.state.userForm.gender.label } name = { this.state.userForm.gender.name }  />
            <button>Click</button>
            <button type = "button" onClick = { this.resetForm }>Reset</button>
        </form>
        <br />
        <br />
        <ul>
        {
          this.props.userList.map(user => (
            <li key = {user.name}>{ user.name }</li>
          ))
        }
        </ul>
      </React.Fragment>
    );
  }

}

const mapStateToProps = state => {
  return {
      userList: state.User.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
      addUser: (user) => dispatch({ type: ACTIONS.ADD_USER, payload: user })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)