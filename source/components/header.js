import React, { Component } from "react";
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const HeaderView = styled.View`
  background: #000;
  padding: 20px;
`;

const Title = styled.Text`
  color: #fff;
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
