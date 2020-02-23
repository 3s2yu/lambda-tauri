import React, { Component } from "react";
import { View } from 'react-native';
import styled from 'styled-components/native';

const ContentView = styled.View`
  flex: 1;
  padding: 20px 0 0;
`;

class Content extends Component {
  render() {
    return <ContentView>{this.props.children}</ContentView>;
  }
}

export default Content;
