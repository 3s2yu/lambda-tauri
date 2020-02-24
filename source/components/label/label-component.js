import React, { Component } from 'react';

import { UIContainer, UIText } from './label-style';

class Label extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
  }

  render() {
    const { children, onPress, theme, bg, underlayColor } = this.props;

    return (
      <UIContainer underlayColor={underlayColor} onPress={onPress} bg={bg}>
        <UIText>{children}</UIText>
      </UIContainer>
    );
  }
}

export default Label;
