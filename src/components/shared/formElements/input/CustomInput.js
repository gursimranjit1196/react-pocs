import React from 'react';


class CustomInput extends React.Component {
  
  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <input 
          type = { this.props.type } 
          name = { this.props.name }
          { ...this.props.elementConfig } 
          value = { this.props.value }
          onChange = { this.props.valueChangeHandler }
        />
      </div>
    );
  }

}

export default CustomInput;