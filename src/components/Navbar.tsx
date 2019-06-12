import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="navigationbar">       
        <div className="upper" />
        <div className="lower" />
      </div>
    );
  }
}

export default Navbar;
