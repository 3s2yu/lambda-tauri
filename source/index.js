import 'react-native-gesture-handler';
import React, { Component, useEffect } from 'react';
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
    <Provider store={store}>
      <ConnectedRootContainer />
    </Provider>
  );
};

export default App;
