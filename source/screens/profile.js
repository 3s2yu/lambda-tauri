import React, { Component, Fragment } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Platform, Text } from 'react-native';

import { Header, Content, Avatar } from '../components';

class ProfileScreen extends Component {
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
            </Content>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default ProfileScreen;
