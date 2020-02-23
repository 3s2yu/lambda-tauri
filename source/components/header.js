import React, { Component } from "react";
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  background: #fff;
  padding: 20px;
`;

const Title = styled.Text`
  color: #a1a1a1;
  font-size: 20px;
  text-align: center;
`;

class Header extends Component {
  render() {
    return (
      <HeaderView>
        <Title>DoB DoD</Title>
      </HeaderView>
    );
  }
}

export default Header;
