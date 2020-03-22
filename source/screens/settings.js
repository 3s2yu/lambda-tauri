import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { GlobalizeProvider, loadMessages, FormattedMessage } from 'react-native-globalize';

import { changeLanguage } from '../store/actions'
import { Button, Header, Page } from '../components';
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
      <Page header={<Header />}>
        <GlobalizeProvider locale={this.props.curState}>
          <ContainerView>
            <TitleText>
              <FormattedMessage message="Settings" />
            </TitleText>
            <Button text="PT-BR" onPress={() => {this.props.changeLanguage('pt')}} />
            <Button text="EN" onPress={() => {this.props.changeLanguage('en')}} />
          </ContainerView>
        </GlobalizeProvider>
      </Page>
    );
  }
}

const mapStateToProps = ({ lang }) => ({
  curState: lang.lang
});

export default connect(mapStateToProps, {
	changeLanguage,
})(SettingsScreen);
