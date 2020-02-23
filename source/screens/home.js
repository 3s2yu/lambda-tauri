import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Platform, Text } from 'react-native';
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
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
            <Header />
            <Content>
              <Title>Personalidades do dia</Title>
              <List />
            </Content>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default HomeScreen;
