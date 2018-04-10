import React from 'react';

import Img from './Img';
import Banner from './banner.jpg';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </div>
    );
  }
}

export default Header;
