import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  alignItems: center;
  background-color: ${props => props.bg};
  justifyContent: center;
  padding: 5px;
  width: 50%;
`;

const TextView = styled.Text`
  color: #fff;
  fontSize: 17;
  textShadow: 0 0 3px rgba(0,0,0,0.6);
`;

class Date extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
  }

  render() {
    const { children, onPress, theme, bg, underlayColor } = this.props;

    return (
      <Container underlayColor={underlayColor} onPress={onPress} bg={bg}>
        <TextView>{children}</TextView>
      </Container>
    );
  }
}

export default Date;
