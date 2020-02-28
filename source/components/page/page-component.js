import React, { Component } from "react";
import { SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';

import { Button, Icon } from '../index';

import { UIPage, UIMain, UIPlus } from './page-style';

class Page extends Component {
  handleLink = () => {
    return this.props.navigation.navigate('Registration', {});
  }

  render() {
    return (
      <UIPage>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{ flex: 1 }}>
            {this.props.header}
            <UIMain plus={this.props.plus}>{this.props.children}</UIMain>
          </ScrollView>
          {this.props.plus &&
          <UIPlus>
            <Button bg="#000" width="110%" onPress={this.handleLink}>
              <Icon name="plus" size={60} color="#fff" />
            </Button>
          </UIPlus>}
        </SafeAreaView>
      </UIPage>
    );
  }
}

export default Page;
