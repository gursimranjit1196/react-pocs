import React from 'react';


class CustomSelect extends React.Component {
  
  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <select
            value ={ this.props.value }
            name = { this.props.name }
            onChange = { this.props.valueChangeHandler }>
            { this.props.elementConfig.options.map(option => (
                <option key = { option.value } value = { option.value }>
                    { option.uiValue }
                </option>
            )) }
        </select>
      </div>
    );
  }

}

export default CustomSelect;