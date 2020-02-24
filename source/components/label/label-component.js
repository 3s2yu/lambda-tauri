import React, { Component } from 'react';

import { UIContainer, UIText, UIFlag, UIIcon } from './label-style';

class Label extends Component {
  static defaultProps = {
    bg: '#fff',
    width: '50%'
  }

  render() {
    const { children, bg, width, icon, daysLeft } = this.props;

    return (
      <UIContainer bg={bg} width={width}>
        {icon && <UIIcon>{icon}</UIIcon>}
        <UIText>{children}</UIText>
        <UIFlag>{daysLeft}</UIFlag>
      </UIContainer>
    );
  }
}

export default Label;
