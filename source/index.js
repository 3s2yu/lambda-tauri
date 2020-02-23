import 'react-native-gesture-handler';
import React, { Component, Fragment, useEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';
import { Provider, connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { FormattedProvider } from 'react-native-globalize';
import SplashScreen from 'react-native-splash-screen';

import store from './store';
import messages from './messages';
import { colors } from './constants'

import Navigator from './navigator';

class RootContainer extends Component {
  render() {
    return (
      <ThemeProvider theme={colors}>
        <FormattedProvider locale={this.props.lang.lang} messages={messages}>
          <Navigator />
        </FormattedProvider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const ConnectedRootContainer = connect(mapStateToProps,null)(RootContainer);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Fragment>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Provider store={store}>
            <ConnectedRootContainer />
          </Provider>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
