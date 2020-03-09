import React, { Component } from 'react';

import { UIButton, UIContent } from './button-style';

class Button extends Component {
  static defaultProps = {
    bg: '#fff',
    color: '#000',
    underlayColor: '#fff',
    leftSpace: false,
    rightSpace: false,
    height: 'auto',
    textAlign: 'center',
    width: '18%'
  }

  render() {
    const { children, onPress, theme, bg, underlayColor, width, leftSpace, rightSpace, height, color, textAlign } = this.props;

    return (
      <UIButton
        underlayColor={underlayColor}
        onPress={onPress}
        bg={bg}
        width={width}
        height={height}
        leftSpace={leftSpace}
        rightSpace={rightSpace}
        underlayColor="#ccc"
      >
        <UIContent
          color={color}
          textAlign={textAlign}
        >{children}</UIContent>
      </UIButton>
    );
  }
}

export default Button;
