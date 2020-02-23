import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar, Platform, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { FormattedProvider, FormattedMessage } from 'react-native-globalize';

import { changeLanguage } from '../actions'
import { Button } from '../components';
import messages from '../messages';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  fontSize: 30;
`;

class SettingsScreen extends Component {
  render() {
    return (
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
          <FormattedProvider locale={this.props.curState} messages={messages}>
            <ContainerView>
              <TitleText>
                <FormattedMessage message="Settings" />
              </TitleText>
              <Button text="PT-BR" onPress={() => {this.props.changeLanguage('pt')}} />
              <Button text="EN" onPress={() => {this.props.changeLanguage('en')}} />
            </ContainerView>
          </FormattedProvider>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  curState: lang.lang
});

export default connect(mapStateToProps, {
	changeLanguage,
})(SettingsScreen);
