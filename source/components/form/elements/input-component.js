import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = props => {
  const { config, onChange } = props;

  return (
    <View style={{ flex: 1 }}>
      <Text>{config.label}</Text>
      <TextInput
        placeholder={config.placeholder}
        onChangeText={value => onChange(value)}
      />
    </View>
  );
};

export default Input;
