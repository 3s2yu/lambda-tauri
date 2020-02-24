import React, { Component, Fragment } from "react";
import { SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';

import { UIMain } from './page-style';

class Page extends Component {
  render() {
    return (
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
            {this.props.header}
            <UIMain>{this.props.children}</UIMain>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default Page;
