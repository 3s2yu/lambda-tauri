import React from 'react';
import { UIView, UILabel, UIInput } from './input-style';

const Input = props => {
  const { config, onChange } = props;

  return (
    <UIView>
      <UILabel>{config.label}</UILabel>
      <UIInput
        placeholder={config.placeholder}
        onChangeText={value => onChange(value)}
      />
    </UIView>
  );
};

export default Input;
