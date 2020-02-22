import React, { Component } from 'react';
import styled from 'styled-components/native';

import { Header, Content, List } from '../components';

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin: 10px;
`;

class HomeScreen extends Component {
  render() {
    return (
      <>
        <Header />
        <Content>
          <Title>Personalidades do dia</Title>
          <List />
        </Content>
      </>
    );
  }
}

export default HomeScreen;
