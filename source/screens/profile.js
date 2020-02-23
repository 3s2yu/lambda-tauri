import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Platform, Text } from 'react-native';

import { Header, Content, Avatar, Button } from '../components';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);

    this.handleBack = this.handleBack.bind(this);
  }

  handleBack() {
    alert('AHHHHHh');
    this.props.navigation.navigate('Root', { screen: 'Home' });
  }

  render() {
    const { name, image } = this.props.route.params;

    return (
      <Fragment>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <SafeAreaView>
          <ScrollView>
            <Header />
            <Content>
              <Avatar hasImage={image.hasImage} imagePath={image.imagePath} />
              <Text>{name}</Text>
              <Button onPress={this.handleBack} bg="#ccc">Voltar</Button>
              <Button onPress={() => this.props.navigation.navigation('Settings')} bg="#ccc">Voltar</Button>
            </Content>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default ProfileScreen;
