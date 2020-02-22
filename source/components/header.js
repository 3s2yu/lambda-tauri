import React, { Component } from "react";
import styled from 'styled-components/native';

const HeaderView = styled.View`
  background: #000;
  height: 80;
  padding: 40px 0 0;
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
