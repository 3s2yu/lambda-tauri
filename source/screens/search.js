import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Platform, View } from 'react-native';
import { Header, Content, List } from '../components';

class SearchScreen extends Component {
  render() {
    return (
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
          <Header />
          <Content>
            <List navigation={this.props.navigation} />
          </Content>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default SearchScreen;
