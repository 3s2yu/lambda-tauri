import React, { Component } from "react";

import { UIHeader, UITitle } from './header-style';

class Header extends Component {
  render() {
    return (
      <UIHeader>
        <UITitle>DoB DoD</UITitle>
      </UIHeader>
    );
  }
}

export default Header;
