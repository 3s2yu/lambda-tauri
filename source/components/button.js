import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components/native';

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => props.bg};
  border-radius: 6px;
  margin-left: 20px;
  padding: 5px;
  width: 20%;
`;

const ContentView = styled.Text`
  text-align: center;
`;

class Button extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
  }

  render() {
    const { children, onPress, theme, bg, underlayColor } = this.props;

    return (
      <ButtonView underlayColor={underlayColor} onPress={onPress} bg={bg} underlayColor="#ccc">
        <ContentView>{children}</ContentView>
      </ButtonView>
    );
  }
}

export default Button;
