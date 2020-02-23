import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar, Platform, View, Text } from 'react-native';
import styled from 'styled-components/native';
import { GlobalizeProvider, loadMessages, FormattedMessage } from 'react-native-globalize';

import { changeLanguage } from '../actions'
import { Button } from '../components';
import messages from '../messages';

const ContainerView = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const TitleText = styled.Text`
  font-size: 30px;
`;

loadMessages(messages);

class SettingsScreen extends Component {
  render() {
    return (
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
          <GlobalizeProvider locale={this.props.curState}>
            <ContainerView>
              <TitleText>
                <FormattedMessage message="Settings" />
              </TitleText>
              <Button text="PT-BR" onPress={() => {this.props.changeLanguage('pt')}} />
              <Button text="EN" onPress={() => {this.props.changeLanguage('en')}} />
            </ContainerView>
          </GlobalizeProvider>
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
