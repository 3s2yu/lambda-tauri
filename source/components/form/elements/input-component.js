import React, { Component } from 'react';
import { UIView, UILabel, UIInput } from './input-style';

class Input extends Component {
  render() {
    const { label, placeholder, value, onChange } = this.props;

    return (
      <UIView>
        {label && <UILabel>{label}</UILabel>}
        <UIInput
          placeholder={placeholder}
          onChangeText={onChange}
          value={value}
        />
      </UIView>
    );
  }
};

export default Input;
