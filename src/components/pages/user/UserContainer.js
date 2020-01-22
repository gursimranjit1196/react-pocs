import React from 'react';

// Form Elements
import CustomInput from "../../shared/formElements/input/CustomInput";
import CustomSelect from "../../shared/formElements/select/CustomSelect";

class UserContainer extends React.Component {

  state = {
      userForm: {
        name: {
            name: 'name',
            type: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Enter Your Name'
            },
            value: '',
            label: "Enter Name"
        },
        gender: {
            name: 'gender',
            type: 'select',
            elementConfig: {
                options: [
                    { value: "male", uiValue: 'MALE' },
                    { value: "female", uiValue: 'FEMALE' }
                ]
            },
            value: '',
            label: "Select Gender"
        }
      }
  }


  valueChangeHandler = (event) => {
    let userForm = { ...this.state.userForm }

    userForm[event.target.name].value = event.target.value

    this.setState({ userForm })
  }

  
  render() {
    return (
        <form>
            <CustomInput type = { this.state.userForm.name.type } elementConfig = { this.state.userForm.name.elementConfig } value = { this.state.userForm.name.value } valueChangeHandler = { this.valueChangeHandler } label = { this.state.userForm.name.label } name = { this.state.userForm.name.name }  />
            <CustomSelect type = { this.state.userForm.gender.type } elementConfig = { this.state.userForm.gender.elementConfig } value = { this.state.userForm.gender.value } valueChangeHandler = { this.valueChangeHandler } label = { this.state.userForm.gender.label } name = { this.state.userForm.name }  />
        </form>
    );
  }

}

export default UserContainer;
