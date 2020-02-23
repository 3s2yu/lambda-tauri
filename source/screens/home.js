import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';

import { Header, Content, List } from '../components';

class HomeScreen extends Component {
  render() {
    return (
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
            <Header />
            <Content>
              <List />
            </Content>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default HomeScreen;
