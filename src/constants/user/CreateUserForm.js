const userForm = {
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

export default userForm