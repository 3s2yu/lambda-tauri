import React, { Component } from 'react';
import { UIView, UILabel, UIInput } from './input-style';

class Input extends Component {
  render() {
    const { label, placeholder, onChange } = this.props;

    return (
      <UIView>
        <UILabel>{label}</UILabel>
        <UIInput
          placeholder={placeholder}
          onChangeText={onChange}
        />
      </UIView>
    );
  }
};

export default Input;
