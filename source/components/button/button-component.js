import React, { Component } from 'react';

import { UIButton, UIContent } from './button-style';

class Button extends Component {
  static defaultProps = {
    bg: '#ff00ff',
    underlayColor: '#fff',
    leftSpace: false,
    rightSpace: false,
    width: '18%'
  }

  render() {
    const { children, onPress, theme, bg, underlayColor, width, leftSpace, rightSpace } = this.props;

    return (
      <UIButton
        underlayColor={underlayColor}
        onPress={onPress}
        bg={bg}
        width={width}
        leftSpace={leftSpace}
        rightSpace={rightSpace}
        underlayColor="#ccc"
      >
        <UIContent>{children}</UIContent>
      </UIButton>
    );
  }
}

export default Button;
